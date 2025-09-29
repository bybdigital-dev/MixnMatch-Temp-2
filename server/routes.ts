import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact inquiry routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertContactInquirySchema.parse(req.body);
      
      // Create the contact inquiry
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contact inquiry submitted successfully",
        id: inquiry.id 
      });
    } catch (error) {
      console.error("Error creating contact inquiry:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid form data", 
          details: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        error: "Failed to submit inquiry" 
      });
    }
  });

  // Get all contact inquiries (for admin dashboard)
  app.get("/api/admin/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({ success: true, inquiries });
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch inquiries" 
      });
    }
  });

  // Get single contact inquiry
  app.get("/api/admin/inquiries/:id", async (req, res) => {
    try {
      const inquiry = await storage.getContactInquiry(req.params.id);
      
      if (!inquiry) {
        return res.status(404).json({ 
          success: false, 
          error: "Inquiry not found" 
        });
      }
      
      res.json({ success: true, inquiry });
    } catch (error) {
      console.error("Error fetching inquiry:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to fetch inquiry" 
      });
    }
  });

  // Update inquiry status
  app.patch("/api/admin/inquiries/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      
      if (!status || !['new', 'contacted', 'quoted', 'completed'].includes(status)) {
        return res.status(400).json({ 
          success: false, 
          error: "Invalid status" 
        });
      }
      
      const inquiry = await storage.updateContactInquiryStatus(req.params.id, status);
      
      if (!inquiry) {
        return res.status(404).json({ 
          success: false, 
          error: "Inquiry not found" 
        });
      }
      
      res.json({ success: true, inquiry });
    } catch (error) {
      console.error("Error updating inquiry status:", error);
      res.status(500).json({ 
        success: false, 
        error: "Failed to update inquiry status" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

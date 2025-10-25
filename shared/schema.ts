import { z } from "zod";

// Contact Inquiry Types
export const insertContactInquirySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  suburb: z.string().min(1),
  services: z.array(z.string()),
  message: z.string().min(1),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;

export interface ContactInquiry extends InsertContactInquiry {
  id: string;
  status: 'new' | 'contacted' | 'quoted' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

// User Types (for future admin functionality)
export const insertUserSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type InsertUser = z.infer<typeof insertUserSchema>;

export interface User extends InsertUser {
  id: string;
}

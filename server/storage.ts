import { users, contactInquiries, type User, type InsertUser, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods (for future admin functionality)
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact inquiry methods
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;
  updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Contact inquiry methods
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [contactInquiry] = await db
      .insert(contactInquiries)
      .values(inquiry)
      .returning();
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return await db
      .select()
      .from(contactInquiries)
      .orderBy(desc(contactInquiries.createdAt));
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    const [inquiry] = await db
      .select()
      .from(contactInquiries)
      .where(eq(contactInquiries.id, id));
    return inquiry || undefined;
  }

  async updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined> {
    const [inquiry] = await db
      .update(contactInquiries)
      .set({ 
        status, 
        updatedAt: new Date() 
      })
      .where(eq(contactInquiries.id, id))
      .returning();
    return inquiry || undefined;
  }
}

export const storage = new DatabaseStorage();

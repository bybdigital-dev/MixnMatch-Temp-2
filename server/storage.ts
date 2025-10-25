import { type User, type InsertUser, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

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

export class MemStorage implements IStorage {
  private users: User[] = [];
  private contactInquiries: ContactInquiry[] = [];

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.find(u => u.id === id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return this.users.find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const user: User = {
      id: randomUUID(),
      ...insertUser,
    };
    this.users.push(user);
    return user;
  }

  // Contact inquiry methods
  async createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const contactInquiry: ContactInquiry = {
      id: randomUUID(),
      ...inquiry,
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.contactInquiries.push(contactInquiry);
    return contactInquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return [...this.contactInquiries].sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.find(i => i.id === id);
  }

  async updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined> {
    const inquiry = this.contactInquiries.find(i => i.id === id);
    if (inquiry) {
      inquiry.status = status as any;
      inquiry.updatedAt = new Date();
    }
    return inquiry;
  }
}

export const storage = new MemStorage();

import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Inquiries API
  app.post("/api/inquiries", async (req: Request, res: Response) => {
    try {
      // Validate inquiry data
      const validationResult = insertInquirySchema.safeParse(req.body);
      
      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ message: validationError.message });
      }
      
      // Save inquiry to storage
      const inquiry = await storage.createInquiry(validationResult.data);
      
      // Return success response
      return res.status(201).json({
        message: "Inquiry submitted successfully",
        inquiry: {
          id: inquiry.id,
          name: inquiry.name,
          email: inquiry.email,
          service: inquiry.service,
          created_at: inquiry.created_at
        }
      });
    } catch (error) {
      console.error("Error creating inquiry:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Get all inquiries (admin only in a real app)
  app.get("/api/inquiries", async (_req: Request, res: Response) => {
    try {
      const inquiries = await storage.getAllInquiries();
      return res.status(200).json(inquiries);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Get inquiry by ID (admin only in a real app)
  app.get("/api/inquiries/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid inquiry ID" });
      }
      
      const inquiry = await storage.getInquiryById(id);
      
      if (!inquiry) {
        return res.status(404).json({ message: "Inquiry not found" });
      }
      
      return res.status(200).json(inquiry);
    } catch (error) {
      console.error("Error fetching inquiry:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

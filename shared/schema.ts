import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  developer: text("developer").notNull(),
  location: text("location").notNull(),
  sector: text("sector").notNull(),
  description: text("description").notNull(),
  features: text("features").array().notNull(),
  status: text("status").notNull(), // Premium, Ready, Township, Luxury, etc.
  imageUrl: text("image_url").notNull(),
  category: text("category").notNull(), // residential, commercial, township
  price: text("price"), // optional price range
  area: text("area"), // optional area details
  possession: text("possession"), // possession details
  amenities: text("amenities").array().notNull(),
  featured: boolean("featured").default(false),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  interest: text("interest").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  designation: text("designation").notNull(),
  message: text("message").notNull(),
  rating: integer("rating").notNull(),
  project: text("project"),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;

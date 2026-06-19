"use server";
import { neon } from "@neondatabase/serverless";
import { NewContactSubmission } from "./types";

export async function createContactSubmission(
  contactSubmission: NewContactSubmission,
) {
  try {
    const sql = neon(`${process.env.POSTGRES_URL}`);
    await sql`INSERT INTO contact_submission (name, email, message) VALUES (${contactSubmission.name}, ${contactSubmission.email}, ${contactSubmission.message})`;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Failed to create contact submission");
  }
}

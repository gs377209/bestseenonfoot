import { db } from "./database";
import {
  ContactSubmission,
  ContactSubmissionUpdate,
  NewContactSubmission,
} from "./types";

export async function findContactSubmissionById(id: number) {
  return await db
    .selectFrom("contact_submission")
    .where("id", "=", id)
    .selectAll()
    .executeTakeFirst();
}

export async function findContactSubmissions(
  criteria: Partial<ContactSubmission>,
) {
  let query = db.selectFrom("contact_submission");

  if (criteria.id) {
    query = query.where("id", "=", criteria.id); // Kysely is immutable, you must re-assign!
  }

  if (criteria.name) {
    query = query.where("name", "=", criteria.name);
  }

  if (criteria.email) {
    query = query.where("name", "=", criteria.email);
  }

  if (criteria.message) {
    query = query.where("name", "=", criteria.message);
  }

  if (criteria.responded !== undefined) {
    query = query.where(
      "responded",
      criteria.responded === null ? "is" : "=",
      criteria.responded,
    );
  }

  if (criteria.created_at) {
    query = query.where("created_at", "=", criteria.created_at);
  }

  return await query.selectAll().execute();
}

export async function updateContactSubmission(
  id: number,
  updateWith: ContactSubmissionUpdate,
) {
  await db
    .updateTable("contact_submission")
    .set(updateWith)
    .where("id", "=", id)
    .execute();
}

export async function createContactSubmission(
  contactSubmission: NewContactSubmission,
) {
  return await db
    .insertInto("contact_submission")
    .values(contactSubmission)
    .returningAll()
    .executeTakeFirstOrThrow();
}

export async function deleteContactSubmission(id: number) {
  return await db
    .deleteFrom("contact_submission")
    .where("id", "=", id)
    .returningAll()
    .executeTakeFirst();
}

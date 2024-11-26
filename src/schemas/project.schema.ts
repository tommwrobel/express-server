import { pgSchema } from "drizzle-orm/pg-core";
import { uuid, text, timestamp, varchar, integer } from "drizzle-orm/pg-core";

export const projectSchema = pgSchema("projects");

export const projects = projectSchema.table("projects", {
  id: uuid("id").defaultRandom().primaryKey(),
  key: varchar("key", { length: 5 }).notNull().unique(),

  name: varchar("name", { length: 24 }).notNull(),
  description: text("description").notNull(),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const projectsSequence = projectSchema.table("projects_sequence", {
  projectId: uuid("project_id")
    .primaryKey()
    .references(() => projects.id),
  sequence: integer("sequence").notNull(),
});

import { pgSchema } from "drizzle-orm/pg-core";
import { uuid, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { projects } from "./project.schema";

export const todoSchema = pgSchema("todos");

export const todoStatusesEnum = todoSchema.enum("todo_status", [
  "PENDING",
  "IN_PROGRESS",
  "COMPLETED",
  "ARCHIVED",
]);

export const todoPrioritiesEnum = todoSchema.enum("todo_priority", [
  "LOW",
  "MEDIUM",
  "HIGH",
]);

export const todos = todoSchema.table("todos", {
  id: uuid("id").defaultRandom().primaryKey(),
  key: varchar("key", { length: 12 }).notNull().unique(),
  projectId: uuid("project_id")
    .notNull()
    .references(() => projects.id),

  title: text("title").notNull(),
  description: text("description").notNull(),
  status: todoStatusesEnum("status").notNull().default("PENDING"),
  priority: todoPrioritiesEnum("priority").notNull().default("MEDIUM"),

  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

import { drizzle } from "drizzle-orm/postgres-js";
import env from "./env";
import postgres from "postgres";
import { todoSchema } from "@schemas/todo.schema";
import { projectSchema } from "@schemas/project.schema";

const queryClient = postgres(env.DATABASE_URL, { max: 1 });

export const db = drizzle(queryClient, {
  schema: {
    ...todoSchema,
    ...projectSchema,
  },
});

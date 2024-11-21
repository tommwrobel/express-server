import { db } from "@config/database";
import { todos } from "@schemas/todo.schema";

export const getTodos = async () => {
  return db.select().from(todos);
};

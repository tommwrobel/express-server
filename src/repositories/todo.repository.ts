import { db } from "@config/database";
import { todos } from "@schemas/todo.schema";
import { Todo } from "../models/todo.model";

export const getTodos = async () => {
  return db.select().from(todos);
};

export const addTodo = async (todo: Todo) => {
  db.insert(todos).values({ ...todo });
};

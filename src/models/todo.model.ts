import z from "zod";
import {
  getTodoSchema,
  createTodoSchema,
  updateTodoSchema,
  deleteTodoSchema,
} from "@api/validators/todo.validator";

export const todoStatuses = ["active", "completed", "archived"] as const;
export type TodoStatus = (typeof todoStatuses)[number];

export const todoPriorities = ["low", "medium", "hard"] as const;
export type TodoPriority = (typeof todoPriorities)[number];

export type Todo = {
  id: string;
  projectId: string;
  createdAt: Date;
  title: string;
  description: string;
  status: TodoStatus;
  priority?: TodoPriority;
  dueDate?: Date;
};

export type GetTodoRequest = z.infer<typeof getTodoSchema>;
export type GetTodoRequestParams = GetTodoRequest["params"];

export type CreateTodoRequest = z.infer<typeof createTodoSchema>;
export type CreateTodoRequestBody = CreateTodoRequest["body"];

export type UpdateTodoRequest = z.infer<typeof updateTodoSchema>;
export type UpdateTodoRequestBody = UpdateTodoRequest["body"];
export type UpdateTodoRequestParams = UpdateTodoRequest["params"];

export type DeleteTodoRequest = z.infer<typeof deleteTodoSchema>;
export type DeleteTodoRequestParams = DeleteTodoRequest["params"];

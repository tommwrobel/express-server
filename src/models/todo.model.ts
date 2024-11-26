import z from "zod";
import {
  getTodoSchema,
  createTodoSchema,
  updateTodoSchema,
  deleteTodoSchema,
} from "@api/validators/todo.validator";
import { InferSelectModel } from "drizzle-orm";
import {
  todoPrioritiesEnum,
  todos,
  todoStatusesEnum,
} from "../schemas/todo.schema";

export const todoStatuses = [...todoStatusesEnum.enumValues] as const;
export type TodoStatus = (typeof todoStatusesEnum.enumValues)[number];

export const todoPriorities = [...todoPrioritiesEnum.enumValues] as const;
export type TodoPriority = (typeof todoPrioritiesEnum.enumValues)[number];

export type Todo = InferSelectModel<typeof todos>;

export type GetTodoRequest = z.infer<typeof getTodoSchema>;
export type GetTodoRequestParams = GetTodoRequest["params"];

export type CreateTodoRequest = z.infer<typeof createTodoSchema>;
export type CreateTodoRequestBody = CreateTodoRequest["body"];

export type UpdateTodoRequest = z.infer<typeof updateTodoSchema>;
export type UpdateTodoRequestBody = UpdateTodoRequest["body"];
export type UpdateTodoRequestParams = UpdateTodoRequest["params"];

export type DeleteTodoRequest = z.infer<typeof deleteTodoSchema>;
export type DeleteTodoRequestParams = DeleteTodoRequest["params"];

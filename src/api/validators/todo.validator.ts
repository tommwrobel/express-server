import { z } from "zod";
import { todoPriorities, todoStatuses } from "@models/todo.model";

// GET /todos/:id

export const getTodoSchema = z.object({
  params: z.object({
    id: z.string().cuid2(),
  }),
});

// DELETE /todos/:id

export const deleteTodoSchema = z.object({
  params: z.object({
    id: z.string().cuid2(),
  }),
});

// POST /todos

export const createTodoSchema = z.object({
  body: z.object({
    projectId: z.string().cuid2(),
    title: z.string().min(1),
    description: z.string().min(1),
  }),
});

// PATCH /todos/:id

export const updateTodoSchema = z.object({
  body: z
    .object({
      title: z.string().min(1).optional(),
      description: z.string().min(1).optional(),
      status: z.enum([...todoStatuses]).optional(),
    })
    .refine((data) => data.title || data.description || data.status, {
      message: "At least one of title, description, or status is required",
      path: ["body"],
    }),
  params: z.object({
    id: z.string().cuid2(),
  }),
});

// GET /todos

export const getTodosSchema = z.object({
  params: z.object({
    search: z.string().optional(),
    status: z
      .object({
        in: z.array(z.enum([...todoStatuses])).optional(),
      })
      .optional(),
    priority: z
      .object({
        in: z.array(z.enum([...todoPriorities])).optional(),
      })
      .optional(),
  }),
});

import { NextFunction, Response } from "express";
import {
  CreateTodoRequestBody,
  DeleteTodoRequestParams,
  GetTodoRequestParams,
  Todo,
  UpdateTodoRequestBody,
  UpdateTodoRequestParams,
} from "@models/todo.model";
import * as todoService from "@services/todo.service";
import { Request } from "@models/api.model";
import { generateId } from "../utils/generateId";

export const getAllTodosController = (_req: Request, res: Response): void => {
  const todos = todoService.getAllTodos();
  res.json(todos);
};

export const getTodoByIdController = (
  req: Request<void, GetTodoRequestParams>,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { id } = req.params;
    const todo = todoService.getTodoById(id);
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

export const createTodoController = (
  req: Request<CreateTodoRequestBody>,
  res: Response,
  next: NextFunction
): void => {
  try {
    const { projectId, title, description } = req.body;
    const newTodo: Todo = {
      id: generateId(),
      projectId,
      title,
      description,
      status: "active",
      createdAt: new Date(),
    };
    const createdTodo = todoService.createTodo(newTodo);
    res.status(201).json(createdTodo);
  } catch (error) {
    next(error);
  }
};

export const updateTodoController = (
  req: Request<UpdateTodoRequestBody, UpdateTodoRequestParams>,
  res: Response
): void => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const updatedTodo = todoService.updateTodo(id, {
    title,
    description,
    status,
  });

  if (!updatedTodo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  res.json(updatedTodo);
};

export const deleteTodoController = (
  req: Request<void, DeleteTodoRequestParams>,
  res: Response
): void => {
  const { id } = req.params;

  const isDeleted = todoService.deleteTodo(id);

  if (!isDeleted) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }

  res.status(204).send();
};

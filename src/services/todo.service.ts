import { Todo } from "@models/todo.type";
import { NotFoundError } from "../utils/errors";

const todos: Todo[] = [
  {
    id: "1",
    title: "Sample title",
    description: "Sample description",
    createdAt: new Date(),
    status: "active",
  },
  {
    id: "2",
    title: "Sample title 2",
    description: "Sample description 2",
    createdAt: new Date(),
    status: "completed",
  },
  {
    id: "3",
    title: "Sample title 3",
    description: "Sample description 3",
    createdAt: new Date(),
    status: "archived",
  },
];

export const getAllTodos = (): Todo[] => {
  return todos;
};

export const getTodoById = (id: string): Todo | undefined => {
  const todo = todos.find((todo) => todo.id === id);
  if (!todo) {
    throw new NotFoundError(`Todo not found`, { todoId: id });
  }
  return todos.find((todo) => todo.id === id);
};

export const createTodo = (todo: Todo): Todo => {
  todos.push(todo);
  return todo;
};

export const updateTodo = (id: string, data: Partial<Todo>): Todo | null => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return null;
  }

  todos[todoIndex] = { ...todos[todoIndex], ...data };
  return todos[todoIndex];
};

export const deleteTodo = (id: string): boolean => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return false;
  }

  todos.splice(todoIndex, 1);
  return true;
};

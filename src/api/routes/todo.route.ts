import express from "express";
import {
  getAllTodosController,
  getTodoByIdController,
  createTodoController,
  updateTodoController,
  deleteTodoController,
} from "@controllers/todo.controller";
import {
  createTodoSchema,
  deleteTodoSchema,
  getTodoSchema,
  updateTodoSchema,
} from "@api/validators/todo.validator";
import { validateRequest } from "@api/middlewares/validateRequest.middleware";

const router = express.Router();

router.get("/", getAllTodosController);
router.get("/:id", validateRequest(getTodoSchema), getTodoByIdController);
router.post("/", validateRequest(createTodoSchema), createTodoController);
router.put("/:id", validateRequest(updateTodoSchema), updateTodoController);
router.delete("/:id", validateRequest(deleteTodoSchema), deleteTodoController);

export default router;

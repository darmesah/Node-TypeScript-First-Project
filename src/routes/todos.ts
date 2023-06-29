import { Router } from "express";

import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodos,
} from "../controller/todos";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", editTodo);

router.delete("/:id", deleteTodo);

export default router;

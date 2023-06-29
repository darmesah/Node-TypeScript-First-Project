import { RequestHandler } from "express";

import { Todo } from "../models/todo";

import { ResponseError } from "../utils";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  try {
    const text: string = req.body.text;
    //   const text = (req.body as { text: string }).text;

    const newTodo = new Todo(Math.random().toString(), text);

    TODOS.push(newTodo);

    res.status(201).json({ message: "Created Todo", newTodo });
  } catch (error) {
    next(error);
  }
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(201).json({ TODOS });
};

export const editTodo: RequestHandler = (req, res, next) => {
  const { id } = req.params;
  const { text }: { text: string } = req.body;

  //   const todo = TODOS.findIndex((todo) => todo.id === id);
  const todo = TODOS.find((todo) => todo.id === id);

  if (!todo) {
    const error: ResponseError = new Error("Todo not found");
    error.status = 404;
    throw error;
  }

  todo.text = text;

  res.status(201).json({ todo });
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;

  const todoIndex = TODOS.findIndex((todo) => todo.id === id);

  if (todoIndex < 0) {
    const error: ResponseError = new Error("Todo not found");
    error.status = 404;
    throw error;
  }

  TODOS.splice(todoIndex, 1);

  res.status(201).json({ message: "Todo removed succesfully" });
};

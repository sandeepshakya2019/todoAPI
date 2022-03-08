const express = require("express");
const route = express.Router();
const todoController = require("../controller/todo.controller");

route.get("/", todoController.getRoot);
route.get("/todo", todoController.getAllTodo);
route.post("/todo", todoController.saveTodo);
route.patch("/todo/:id", todoController.updateTodo);
route.delete("/todo/:id", todoController.deleteTodo);

module.exports = route;

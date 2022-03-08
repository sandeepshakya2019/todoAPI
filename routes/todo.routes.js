const express = require("express");
const route = express.Router();
const todoController = require("../controller/todo.controller");

route.get("/", todoController.getRoot);
route.get("/todo", todoController.getTodo);

module.exports = route;

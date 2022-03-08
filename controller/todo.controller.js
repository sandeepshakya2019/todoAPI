const Todo = require("../model/todo.model");
const todModel = require("../model/todo.model");

const getRoot = (req, res) => {
  res.send("Simple Todo List");
};

const getAllTodo = async (req, res, next) => {
  let todo;
  try {
    todo = await Todo.getAllTodos();
    console.log(todo);
  } catch (err) {
    return next(err);
  }
  res.json(todos);
};

const saveTodo = async (req, res, next) => {
  const task = req.body.task;
  const newTodo = new Todo(task);
  try {
    newTodo.save();
  } catch (err) {
    return next(err);
  }
  res.json({ msg: "Adding todo Success", createdTod: newTodo });
};

const getTodo = (req, res, next) => {};

const deleteTodo = (req, res, next) => {};

// If key value same that do not need to place the equal sign

module.exports = {
  getRoot,
  getAllTodo,
  getTodo,
  deleteTodo,
  saveTodo,
};

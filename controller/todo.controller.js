const Todo = require("../model/todo.model");
const todModel = require("../model/todo.model");

const getRoot = (req, res) => {
  res.send("Simple Todo List");
};

const getAllTodo = async (req, res, next) => {
  let todo;
  try {
    todo = await Todo.getAllTodos();
  } catch (err) {
    return next(err);
  }
  res.json(todo);
};

const saveTodo = async (req, res, next) => {
  const task = req.body.task;
  const newTodo = new Todo(task);
  try {
    await newTodo.save();
  } catch (err) {
    return next(err);
  }
  res.json({ msg: "Adding todo Success", createdTod: newTodo });
};

const updateTodo = async (req, res, next) => {
  const id = req.params.id;
  const task = req.body.task;
  console.log(id, task);
  const newTodo = new Todo(task, id);

  try {
    await newTodo.save();
  } catch (err) {
    return next(err);
  }

  res.json({ msg: "UPdated todo Success", updatedTodo: newTodo });
};

const deleteTodo = async (req, res, next) => {
  const id = req.params.id;
  const newTodo = new Todo(null, id);
  try {
    await newTodo.delete();
  } catch (err) {
    return next(err);
  }

  res.json({ msg: "Delete Todo", deletedTodo: newTodo });
};

// If key value same that do not need to place the equal sign

module.exports = {
  getRoot,
  getAllTodo,
  updateTodo,
  deleteTodo,
  saveTodo,
};

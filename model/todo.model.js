const db = require("../data/todo.database");
const mongodb = require("mongodb");

class Todo {
  constructor(task, id) {
    this.task = task;
    this.id = id;
  }
  static async getAllTodos() {
    const allTodo = await db.getDb().collection("todos").find().toArray();

    return allTodo.map((todo) => {
      return new Todo(todo.task, todo._id);
    });
  }

  async save() {
    const todoId = new mongodb.ObjectId(this.id);
    if (this.id) {
      return await db
        .getDb()
        .collection("todos")
        .updateOne({ _id: todoId }, { $set: { task: this.task } });
    } else {
      return await db
        .getDb()
        .collection("todos")
        .insertOne({ task: this.task });
    }
  }

  async delete() {
    const todoId = new mongodb.ObjectId(this.id);
    if (!this.id) {
      throw new Error("Todo Not Found");
    }
    return await db.getDb().collection("todos").deleteOne({ _id: todoId });
  }
}

module.exports = Todo;

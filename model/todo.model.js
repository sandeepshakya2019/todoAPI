const db = require("../data/todo.database");
const mongodb = require("mongodb");

class Todo {
  constructor(task, id) {
    this.task = task;
    this.id = id;
  }
  static async getTodos() {
    const allTodo = await db.getDb().collection("todos").find().toArray();

    return allTodo.map((todo) => {
      return new Todo(todo._id, todo.task);
    });
  }

  async save() {
    const todoId = new mongodb.ObjectId(this.id);
    if (this.id) {
      return await db
        .getDb()
        .collection("todos")
        .updateOne({ _id: todoId }, { $set: { text: this.text } });
    } else {
      return await db
        .getDb()
        .collection("todos")
        .insertOne({ text: this.text });
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

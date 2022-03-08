const express = require("express");
const todoRoute = require("./routes/todo.routes");
const db = require("./data/todo.database");

const app = express();

app.use("/", todoRoute);

app.listen(3000, () => {
  console.log("Listen on Port 3000");
  db.connectToDatabase().then(() => {
    console.log("Mongo Connected Success");
  });
});

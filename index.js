const express = require("express");
const todoRoute = require("./routes/todo.routes");
const db = require("./data/todo.database");

const app = express();

app.use(express.json());
app.use("/", todoRoute);

app.use((error, req, res, next) => {
  res.status(500).json({
    message: "Something Went Wrong",
  });
});

app.listen(3000, () => {
  console.log("Listen on Port 3000");
  db.connectToDatabase().then(() => {
    console.log("Mongo Connected Success");
  });
});

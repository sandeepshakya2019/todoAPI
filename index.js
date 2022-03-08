const express = require("express");
const todoRoute = require("./routes/todo.routes");
const db = require("./data/todo.database");
const enableCor = require("./middleware/cors");

const app = express();
// To remove the cors error Server A wants to Connect the server B
app.use(enableCor);

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

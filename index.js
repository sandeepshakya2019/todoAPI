const express = require("express");
const todoRoute = require("./routes/todo.routes");

const app = express();

app.use("/", todoRoute);

app.listen(3000, () => {
  console.log("listen on port 3000");
});

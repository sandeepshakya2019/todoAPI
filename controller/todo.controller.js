const getRoot = (req, res) => {
  res.send("Simple Todo List");
};

const getTodo = (req, res, next) => {
  res.json({
    Day: "Monday",
    ToDo: [
      { task: "Eating the food" },
      { task: "Using the phone" },
      { task: "Calling Help" },
    ],
  });
};

// If key value same that do not need to place the equal sign

module.exports = {
  getRoot,
  getTodo,
};

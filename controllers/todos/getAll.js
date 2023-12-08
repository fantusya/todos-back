const { Todo } = require("../../models/todo");

const getAll = async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
};

module.exports = getAll;

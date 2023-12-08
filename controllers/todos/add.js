const { Todo } = require("../../models/todo");

const add = async (req, res) => {
  const result = await Todo.create(req.body);

  console.log("req.body", req.body);
  res.status(201).json(result);
};

module.exports = add;

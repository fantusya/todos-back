const { Todo } = require("../../models/todo");
const { HttpError } = require("../../helpers");

const updateCompleted = async (req, res) => {
  const { todoId } = req.params;
  const { completed } = req.body;

  const result = await Todo.findOneAndUpdate(
    { _id: todoId },
    { completed },
    { new: true }
  );
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = updateCompleted;

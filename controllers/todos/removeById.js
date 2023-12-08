const { Todo } = require("../../models/todo");
const { HttpError } = require("../../helpers");

const removeById = async (req, res) => {
  const { todoId } = req.params;

  const result = await Todo.findByIdAndDelete(todoId);
  if (!result) {
    throw HttpError(404);
  }

  res.json({ message: "The task was deleted" });
};

module.exports = removeById;

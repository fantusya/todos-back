const { Todo } = require("../../models/todo");
const { HttpError } = require("../../helpers");

const updateById = async (req, res) => {
  const { todoId } = req.params;

  const result = await Todo.findOneAndUpdate({ _id: todoId }, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = updateById;

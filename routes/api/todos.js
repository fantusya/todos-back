const express = require("express");

const ctrl = require("../../controllers/todos");
const { ctrlWrapper, validateBody } = require("../../middlewares");

const {
  addSchema,
  updateSchema,
  updateCompletedSchema,
} = require("../../models/todo");

const router = express.Router();

router.get("/", ctrlWrapper(ctrl.getAll));

router.post("/", validateBody(addSchema), ctrlWrapper(ctrl.add));

router.delete("/:todoId", ctrlWrapper(ctrl.removeById));

router.patch(
  "/:todoId",
  validateBody(updateSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  "/:todoId/completed",
  validateBody(updateCompletedSchema),
  ctrlWrapper(ctrl.updateCompleted)
);

module.exports = router;

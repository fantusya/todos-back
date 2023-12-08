const { Schema, model } = require("mongoose");
const Joi = require("joi");

const todoSchema = Schema(
  {
    text: {
      type: String,
      required: [true, "Text of task is required"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const addSchema = Joi.object({
  text: Joi.string().required(),
  completed: Joi.bool(),
});

const updateSchema = Joi.object({
  text: Joi.string().required(),
  //   completed: Joi.bool(),
});

const updateCompletedSchema = Joi.object({
  completed: Joi.bool().required(),
});

const Todo = model("todo", todoSchema);

module.exports = { Todo, addSchema, updateSchema, updateCompletedSchema };

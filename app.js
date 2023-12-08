require("dotenv").config();
const express = require("express");
const cors = require("cors");

// fS8VCZCBjVrppQmY

const todosRouter = require("./routes/api/todos");

const app = express();

app.use(cors());

/*if there`s a req.body in request and in Content-Type is application/json, 
this middleware makes obj from a given string*/
app.use(express.json());

// routes that handle cocktails requests
app.use("/api/todos", todosRouter);

// handler for non-existent request path
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// error catcher (because 4 params) for routes from next(error)
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;

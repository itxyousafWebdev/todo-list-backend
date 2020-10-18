const express = require("express");
const todoController = require("./todoController");
const todoRouter = express.Router();

todoRouter.route("/").get(todoController.getList);
todoRouter.route("/").post(todoController.addTask);
todoRouter.route("/:id").get(todoController.getTask);
todoRouter.route("/:id").patch(todoController.updateTask);
todoRouter.route("/:id").delete(todoController.deleteTask);

module.exports = todoRouter;

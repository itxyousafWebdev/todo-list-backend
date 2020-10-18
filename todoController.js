const Task = require("./todoModel");

exports.getList = async (req, res) => {
  try {
    const todoList = await Task.find();
    res.status(200).json({
      result: todoList.length,
      status: "success",
      data: {
        todoList: todoList
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: error,
    });
  }
};

exports.addTask = async (req, res) => {
  try {
    const newTask = await Task.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        task: newTask,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: error,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json({
      status: "success",
      data: {
        task: task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: error,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        task: updatedTask,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: error,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: {
        task: task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      massage: error,
    });
  }
};

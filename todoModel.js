const mongoose = require("mongoose");
var dateFormat = require("dateformat");


let formatDate = (date) => {
  date = dateFormat(date, "d-mmm-yyyy, h:MM TT");
  return date;
}

const todoSchema = new mongoose.Schema({
  discription: {
    type: String,
    required: [true, "Discription is required"],
    unique: true,
    trim: true,
  },
  responsibility: {
    type: String,
    required: [true, "responsibility is required"],
    trim: true,
  },
  periority: {
    type: String,
    required: [true, "periority is required"],
  },
  complete: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: String,
    default: formatDate(new Date()),
  },
});

const Task = new mongoose.model("Task", todoSchema);

module.exports = Task;
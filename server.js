// db= Todo-list user= yousaf password=K5OI0flNVzL46AJC
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");

const todo = require('./todoModel');

const todoRouter = require('./todoRouter');

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/todo", todoRouter);

dotenv.config({path : './config.env'});

mongoose
  .connect(
    "mongodb+srv://yousaf:K5OI0flNVzL46AJC@cluster0.pf5ej.mongodb.net/todo-DB?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("mangoose is connectted");
  });

  const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log("listening on " + port);
})

  
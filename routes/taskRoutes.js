const express = require("express");
const app = express();
const { addTask, deleteTask, editTask, seeTasks, seeOneTask} = require("../controllers/taskControllers");
app.post("/addTask", addTask);
app.delete("/deleteTask", deleteTask);
app.put("/editTask", editTask);
app.get("/seeTasks", seeTasks);
app.get("/seeOneTasks", seeOneTask);



module.exports = app;
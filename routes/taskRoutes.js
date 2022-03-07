const express = require("express");
const app = express();
const { addTask, deleteTask, editTask, seeTasks, seeOneTask, tasksDetails, editOneTask} = require("../controllers/taskControllers");
app.post("/addTask", addTask);
app.delete("/deleteTask", deleteTask);
app.put("/editTask1/", editTask);
app.get("/seeTasks/:idSECTION", seeTasks); 
app.get("/seeTask/:idTask", tasksDetails); 
app.put("/editTheTask/:idTask", editOneTask);

module.exports = app;
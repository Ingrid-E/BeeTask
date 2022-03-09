const express = require("express");
const app = express();
const { addTask, deleteTask, editTask, seeTasks, seeOneTask, editOneTask} = require("../controllers/taskControllers");
app.post("/addTask", addTask);
app.delete("/deleteTask/:idtask", deleteTask);
app.put("/editTask1/", editTask);
app.get("/seeTasks/:idSECTION", seeTasks); 
app.get("/seeTask/:idTask", seeOneTask); 
app.put("/editTheTask/:idTask", editOneTask);

module.exports = app;
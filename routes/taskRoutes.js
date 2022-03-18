const express = require("express");
const app = express();
const { getUserTasks, getSubjectTasks, addTask, deleteTask, editTask, seeTasks, seeOneTask, editOneTask, countTasks} = require("../controllers/taskControllers");
app.post("/addTask", addTask);
app.post("/countTasks", countTasks);
app.delete("/deleteTask/:idtask", deleteTask);
app.put("/editTask1/", editTask);
app.get("/seeTasks/:idSECTION", seeTasks);
app.get("/getSubjectTasks/:idsubject", getSubjectTasks);
app.get("/getUserTasks/:userid", getUserTasks);
app.get("/seeTask/:idTask", seeOneTask);
app.put("/editTheTask/:idTask", editOneTask);

module.exports = app;
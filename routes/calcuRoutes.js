const express = require("express");
const app = express();
const {createGrade, createCategory, deleteGrade, getGrade, getAllGrades, updateGrade, sumGrades} = require("../controllers/calcu_controllers");

app.put("/calculator/:idgrade", updateGrade);
app.post("/calculator", createGrade);
app.post("/category", createCategory);
app.get("/calculator/:idgrade", getGrade);
app.get("/calculator", getAllGrades);
app.get("/finalGrade/:idsubj", sumGrades);
app.delete("/calculator/:idgrade", deleteGrade);

module.exports = app;
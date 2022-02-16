const express = require("express");
const app = express();
const { addSection, deleteSection, editSection, seeSections} = require("../controllers/sectionControllers");
app.post("/addSection", addSection);
app.delete("/deleteSection", deleteSection);
app.put("/editSection", editSection);
app.get("/seeSections", seeSections);



module.exports = app;
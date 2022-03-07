const express = require("express");
const app = express();
const { addSection, deleteSection, editSection, seeSections} = require("../controllers/sectionControllers");
app.post("/addSection", addSection);
app.delete("/deleteSection", deleteSection);
app.put("/editSection/:idsection", editSection);
app.get("/seeSections/:idSUBJECT", seeSections);



module.exports = app;
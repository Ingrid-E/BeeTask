const express = require("express");
const app = express();
const { addSection, deleteSection, editSection, seeSections, seeOneSection} = require("../controllers/sectionControllers");
app.post("/addSection", addSection);
app.delete("/deleteSection/:idsection", deleteSection);
app.put("/editSection/:idsection", editSection);
app.get("/seeSections/:idSUBJECT", seeSections);
app.get("/seeSection/:idsection",seeOneSection);


module.exports = app;
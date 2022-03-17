const express = require("express");
const app = express();
const { addSubject, deleteSubject, editSubject, seeOneSubject, seeSubjects, countSubjects } = require("../controllers/subjectControllers");


app.post("/addSubject", addSubject);
app.post("/countSubjects", countSubjects);
app.delete("/deleteSubject/:idsubject", deleteSubject );
app.put("/editSubject", editSubject);
app.get("/seeSubjects/:userid", seeSubjects );
app.get("/seeOneSubject", seeOneSubject);

module.exports = app;
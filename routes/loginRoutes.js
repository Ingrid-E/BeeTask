const express = require("express");
const app = express();
const { loginUser, registerUser, seeUser, getUser} = require("../controllers/loginControllers");


app.post("/register", registerUser);
app.post("/login", loginUser);
app.get("/userName", seeUser);
app.get("/login/:email", getUser);
module.exports = app;
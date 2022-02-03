const express = require("express");
const app = express();
const { loginUser, registerUser} = require("../controllers/loginControllers");


app.post("/register", registerUser);
app.post("/login", loginUser);

module.exports = app;
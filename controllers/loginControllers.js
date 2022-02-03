const pool = require("../db");
const bcrypt = require("bcryptjs");

const registerUser = async(req, res, next)=>{
    try {
    const {email, password, names, surnames, telephone} = req.body;
    const hash = await bcrypt.hash(password, 8);
    await pool.query("INSERT INTO USERS (email, password, names, surnames, telephone) VALUES ($1, $2, $3, $4, $5)", [email, hash, names, surnames, telephone]);
    res.status(200).json("User created");
    } catch (error) {
     next(error);   
    }
}

const loginUser = async(req, res, next)=>{
    try {
    const {email, password} = req.body;
    const response = await pool.query("SELECT password FROM USERS WHERE email=$1", [email]);
    if(response.rowCount === 0){
        res.status(404).json({message:"The email typed is not registered"});
    }
    const passwordHash = response.rows;
    const validPass = await bcrypt.compare(password, passwordHash[0].password);
    if(validPass){
        res.json(true);
    }else{
        res.json({message:"password is incorrect"});
    }
    res.status(200).json("User logged");
    } catch (error) {
     next(error);   
    }
}

module.exports = {registerUser, loginUser};
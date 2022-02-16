const pool = require("../db");

const addTask = async(req, res, next)=>{
    try {
    const {name, description, datetime, priority, grade, idSECTION} = req.body;
    await pool.query("INSERT INTO TASK (name, description, datetime, priority, grade, idSECTION) VALUES ($1, $2, $3, $4, $5, $6);", [name, description, datetime, priority, grade, idSECTION]);
    res.status(200).json("task created");
    } catch (error) {
     next(error);   
    }
}

const deleteTask = async(req, res, next)=>{
    try {
    const {idTASK} = req.body;
    await pool.query("DELETE FROM TASK WHERE idTASK = $1;", [idTASK]);
    res.status(200).json("task deleted");
    } catch (error) {
     next(error);   
    }
}

const editTask = async(req, res, next)=>{
    try {
    const {name, description, datetime, priority, grade, idTASK} = req.body;
    await pool.query("UPDATE TASK SET name = $1, description = $2, datetime = $3, priority = $4, grade = $5 WHERE idTASK = $6;", [name, description, datetime, priority, grade, idTASK]);
    res.status(200).json("subject edited");
    } catch (error) {
     next(error);   
    }
}

const seeTasks = async(req, res, next)=>{
    try {
    const {idSECTION} = req.body;
    const response = await pool.query("SELECT name, grade FROM TASK WHERE idSECTION = $1;", [idSECTION]);
    if(response.rowCount === 0){
        res.status(404).json({message:`The section with the idSECTION: ${idSECTION} not exists`});
    }
    res.status(200).json("showing tasks");
    } catch (error) {
     next(error);   
    }
}

const seeOneTask = async(req, res, next)=>{
    try {
    const {idTASK} = req.body;
    const response = await pool.query("SELECT name, description, datetime, priority, grade FROM TASK WHERE idTASK = $1;", [idTASK]);
    if(response.rowCount === 0){
        res.status(404).json({message:`The task with the idTASK: ${idTASK} not exists`});
    }
    res.status(200).json("showing task");
    } catch (error) {
     next(error);   
    }
}


module.exports = {addTask, deleteTask, editTask, seeTasks, seeOneTask};
const pool = require("../db");

const addTask = async(req, res, next)=>{
    try {
    const {name, description, datetime, priority, idSECTION} = req.body;
    await pool.query("INSERT INTO TASK (name, description, datetime, priority, idSECTION) VALUES ($1, $2, $3, $4, $5);", [name, description, datetime, priority, idSECTION]);
    res.status(200).json("task created");
    } catch (error) {
     next(error);   
    }
}

const countTasks = async(req, res, next)=>{
    try {
    console.log("User id del usuario", req.body)
    const {userid} = req.body;
    const response = await pool.query("SELECT COUNT(idtask) AS tasksCounted FROM TASK t JOIN SECTION s ON t.idsection = s.idsection JOIN SUBJECT sub ON s.idsubject = sub.idsubject and sub.userid = $1;", [userid]);
    res.status(200).json(response.rows[0]);
    } catch (error) {
     next(error);   
    }
}


const deleteTask = async(req, res, next)=>{
    try {
    const {idtask} = req.params;
    await pool.query("DELETE FROM TASK WHERE idTASK = $1;", [idtask]);
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


const editOneTask = async(req, res, next)=>{ 
    try {
        console.log("pasa por aqui");
    const {idTask} = req.params;
    console.log("el id: ", idTask);
    const {name, description, grade, datetime} = req.body;
    console.log("body: ",name, description, grade )
    await pool.query("UPDATE TASK SET name = $1, description = $2, grade = $3, datetime = $4 WHERE idtask = $5;", [name, description, grade, datetime, idTask]);
    res.status(200).json("subject edited");
    } catch (error) {
     next(error);
    }
}

const seeTasks = async(req, res, next)=>{
    try {
    const {idsection} = req.params;
    const response = await pool.query("SELECT * FROM TASK WHERE idsection = $1;", [idsection]);
    res.status(200).json(response.rows);
    } catch (error) {
     next(error);
    }
}


const getSubjectTasks = async(req, res, next)=>{
    try {
    const {idsubject} = req.params;
    const response = await pool.query("SELECT DISTINCT * FROM TASK t JOIN SECTION s ON s.idsection = t.idsection AND idSUBJECT = $1 ORDER BY datetime asc;", [idsubject]);
    console.log(response.rows)
    res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
     next(error);
    }
}


const subjectTasks = async(req, res, next)=>{
    try {
    const {idsection} = req.params;
    const response = await pool.query("SELECT * FROM TASK WHERE idsection = $1;", [idsection]);
    res.status(200).json(response.rows);
    } catch (error) {
     next(error);
    }
}


const seeOneTask = async(req, res, next)=>{
    try {
    const {idTask} = req.params;
    const response = await pool.query("SELECT name, description, datetime, priority, grade FROM TASK WHERE idTASK = $1;", [idTask]);
    if(response.rowCount === 0){
        res.status(404).json({message:`The task with the idTASK: ${idTASK} not exists`});
    }
    res.status(200).json(response.rows[0]);
    } catch (error) {
     next(error);   
    }
}


module.exports = {addTask, deleteTask, editTask, seeTasks, seeOneTask, editOneTask, countTasks, getSubjectTasks};
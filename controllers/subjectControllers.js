const pool = require("../db");

const addSubject = async(req, res, next)=>{
    try {
    const {subjectName, description, userid} = req.body;
    const response = await pool.query("INSERT INTO SUBJECT (subjectName, description, userid) VALUES ($1, $2, $3) RETURNING idsubject;", [subjectName, description, userid]);
    res.status(200).json(response.rows[0]);
    } catch (error) {
     next(error);
    }
}

const countSubjects = async(req, res, next)=>{
    try {
    const {userid} = req.body;
    const response = await pool.query("SELECT COUNT(idsubject) AS subjectsCounted FROM subject WHERE userid = $1;", [userid]);
    res.status(200).json(response.rows[0]);
    } catch (error) {
     next(error);
    }
}

const deleteSubject = async(req, res, next)=>{
    try {
    const {idsubject} = req.params;
    await pool.query("DELETE FROM SUBJECT WHERE idsubject = $1;", [idsubject]);
    res.status(200).json("subject deleted");
    } catch (error) {
     next(error);
    }
}

const editSubject = async(req, res, next)=>{
    try {
    const {subjectname, description, idsubject, userid} = req.body;
    await pool.query("UPDATE subject SET subjectname= $1, description=$2 WHERE idsubject = $3 AND userid = $4;", [subjectname, description, idsubject, userid]);
    res.status(200).json("subject edited");
    } catch (error) {
     next(error);
    }
}

const seeSubjects = async(req, res, next)=>{
    try {
    const {userid} = req.params;
    console.log("el userid: ", userid);
    const response = await pool.query("SELECT subjectname, idsubject FROM subject WHERE userid = $1;", [userid]);
    res.status(200).json(response.rows);
    } catch (error) {
     next(error);   
    }
}

const seeOneSubject = async(req, res, next)=>{
    try {
    const {idsubject} = req.params;
    const response = await pool.query("SELECT * FROM subject WHERE idsubject = $1;", [idsubject]);
    if(response.rowCount === 0){
        res.status(404).json({message:`the idsubject: ${idsubject} not exists`});
    }
    res.status(200).json(response.rows[0]);
    } catch (error) {
     next(error);
    }
}


module.exports = {addSubject, deleteSubject, editSubject, seeOneSubject, seeSubjects, countSubjects};
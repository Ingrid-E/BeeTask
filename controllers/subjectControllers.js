const pool = require("../db");

const addSubject = async(req, res, next)=>{
    try {
    const {subjectName, description, userid} = req.body;
    await pool.query("INSERT INTO SUBJECT (subjectName, description, userid) VALUES ($1, $2, $3);", [subjectName, description, userid]);
    res.status(200).json("subject created");
    } catch (error) {
     next(error);   
    }
}

const deleteSubject = async(req, res, next)=>{
    try {
    const {idsubject, userid} = req.body;
    await pool.query("DELETE FROM SUBJECT WHERE idsubject = $1 AND userid = $2;", [idsubject, userid]);
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
    const {userid} = req.body;
    const response = await pool.query("SELECT subjectname FROM subject WHERE userid = $1;", [userid]);
    if(response.rowCount === 0){
        res.status(404).json({message:`The user with the userid: ${userid} not exists`});
    }
    res.status(200).json("showing subjects");
    } catch (error) {
     next(error);   
    }
}

const seeOneSubject = async(req, res, next)=>{
    try {
    const {userid, idsubject} = req.body;
    const response = await pool.query("SELECT subjectname, description FROM subject WHERE userid = $1;", [userid]);
    if(response.rowCount === 0){
        res.status(404).json({message:`The user with the userid: ${userid} not exists or the subject with the idsubject: ${idsubject} not exists`});
    }
    res.status(200).json("showing subject");
    } catch (error) {
     next(error);   
    }
}


module.exports = {addSubject, deleteSubject, editSubject, seeOneSubject, seeSubjects};
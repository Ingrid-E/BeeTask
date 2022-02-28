const pool = require("../db");

const addSection = async(req, res, next)=>{
    try {
    const {sectionName, gradePercentage, idSUBJECT} = req.body;
    await pool.query("INSERT INTO SECTION (sectionName, gradePercentage, idSUBJECT) VALUES ($1, $2, $3);", [sectionName, gradePercentage, idSUBJECT]);
    res.status(200).json("section created");
    } catch (error) {
     next(error);   
    }
}

const deleteSection = async(req, res, next)=>{
    try {
    const {idSECTION} = req.body;
    await pool.query("DELETE FROM SECTION WHERE idSECTION = $1;", [idSECTION]);
    res.status(200).json("section deleted");
    } catch (error) {
     next(error);   
    }
}


const editSection = async(req, res, next)=>{
    try {
    const {sectionName, gradePercentage, idSECTION} = req.body;
    await pool.query("UPDATE SECTION SET sectionName = $1, gradePercentage = $2 WHERE idSECTION = $1;", [sectionName, gradePercentage,idSECTION]);
    res.status(200).json("section edited");
    } catch (error) {
     next(error);   
    }
}

const seeSections = async(req, res, next)=>{
    try {
    const {idSUBJECT} = req.params;
    console.log("idsubject: ", idSUBJECT)
    const response = await pool.query("SELECT sectionName, gradePercentage, idSECTION FROM SECTION WHERE idsubject = $1;", [idSUBJECT]);
    res.status(200).json(response.rows);
    } catch (error) {
     next(error);   
    }
}

module.exports = {addSection, deleteSection, editSection, seeSections};
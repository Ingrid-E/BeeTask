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
    const {idsection} = req.params;
    await pool.query("DELETE FROM SECTION WHERE idSECTION = $1;", [idsection]);
    res.status(200).json("section deleted");
    } catch (error) {
     next(error);   
    }
}


const editSection = async(req, res, next)=>{
    try {
    console.log("Hola");
    const {idsection} = req.params;
    const {sectionname, gradepercentage} = req.body;
    await pool.query("UPDATE SECTION SET sectionname = $1, gradepercentage = $2 WHERE idsection = $3", [sectionname, gradepercentage, idsection]);
    res.status(200).json("section edited");
    } catch (error) {
     next(error);   
    }
}

const seeSections = async(req, res, next)=>{
    try {
    const {idSUBJECT} = req.params;
    const response = await pool.query("SELECT sectionName, gradePercentage, idSECTION FROM SECTION WHERE idsubject = $1;", [idSUBJECT]);
    res.status(200).json(response.rows);
    } catch (error) {
     next(error);   
    }
}

const seeOneSection = async(req, res, next)=>{
    try {
    const {idsection} = req.params;
    const response = await pool.query("SELECT sectionName, gradePercentage FROM SECTION WHERE idsection = $1;", [idsection]);
    res.status(200).json(response.rows[0]);
    } catch (error) {
     next(error);   
    }
}


module.exports = {addSection, deleteSection, editSection, seeSections, seeOneSection};
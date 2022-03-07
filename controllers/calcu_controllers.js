const pool = require("../db");

var subname = "";
var definitely = 0.0;//examenes
var section;


const createGrade = async(req, res, next)=>{
    try {
    const {idsubj, actname, category, grade} = req.body;
    await pool.query("INSERT INTO GRADES (idsubj, actname, category, grade) VALUES ($1, $2, $3, $4)", [idsubj, actname, category, grade]);
    res.status(200).json("Grade created");
    
    if(idsubj==1) subname = "English";
    if(idsubj==2) subname = "Korean";
    if(idsubj==3) subname = "Chinese";
    if(idsubj==4) subname = "Japanese";

    await pool.query("INSERT INTO details_subject"+idsubj+" (idsubject, subjectname, matter, category, grade) VALUES ($1, $2, $3, $4, $5)", [idsubj, subname, actname, category, grade]);
   
    }catch (error) {
     next(error);   
    }
};

const createCategory = async(req, res, next)=>{
  try {
  const {catname, percent} = req.body;
  await pool.query("INSERT INTO CATEGORIES (catname, percent) VALUES ($1, $2)", [catname,percent]);
  res.status(200).json("Grade created");
  }catch (error) {
   next(error);   
  }
};

//Calculo de nota por materia
const sumGrades = async(req, res, next)=>{
  try {

    var sumHome, canHome, catpp;
    const {idsubj} = req.params;
    const theCategories = await pool.query("SELECT * FROM section WHERE idsubject = $1", [idsubj]);//seleccionar registros por materia

    let catt = [];

    for(var q=0;q<theCategories.rows.length;q++){
      catt[q] = Object.values(theCategories.rows[q])[0];
    }

    if(theCategories.rows.length!=0){

      for(var m=0;m<theCategories.rows.length;m++){
        section = catt[m];
        const catPercent = await pool.query("SELECT gradepercentage FROM section WHERE idsection = $1 and idsubject = $2", [section, idsubj]);
        catpp = Object.values(catPercent.rows[0])[0];//porcentaje seccion
        //console.log(catpp);

        const canHomeworks = await pool.query("SELECT COUNT (*) FROM task WHERE idsection = $1", [section]);
        canHome = Object.values(canHomeworks.rows[0])[0];//cantidad de tareas
        //console.log(canHome);
  
        if(canHome!=0){
          const sumHomeworks = await pool.query("SELECT sum(grade*"+catpp/100+") FROM task WHERE idsection = $1", [section]);
          sumHome = Object.values(sumHomeworks.rows[0])[0];//suma de notas por sección
          //console.log(sumHome/canHome);
          definitely += sumHome/canHome;
    }
    
      }
      
    }

    console.log(definitely);
    
    res.json(definitely);

    definitely = 0.0;

  } catch (error) {
    next(error);
  }
};



const getGrade = async (req, res, next) => {
    try {
    
    const {idgrade} = req.params;
    const read = await pool.query("SELECT * FROM grades WHERE idgrade = $1", [idgrade]);
    res.json(read.rows[0]);
    } catch (error) {
      next(error);
    }
  };

  const getAllGrades = async (req, res) => {
    try {
    const everything = await pool.query("SELECT * FROM grades");
    res.json(everything.rows);
    } catch (error) {
      next(error);
    }
  };

const deleteGrade = async (req, res) => {
    try {
    
    const {idgrade} = req.params;
    await pool.query("DELETE FROM grades WHERE idgrade = $1", [idgrade]);
    res.status(200).json("Grade deleted");
    } catch (error) {
      next(error);
    }
  };
  
  const updateGrade = async (req, res) => {
    try {
    
    const {idgrade} = req.params;
    const {grade, actname, category, sub_idsubject} = req.body;
    const upd = await pool.query("UPDATE grades SET grade = $1, actname = $2, category = $3, sub_idsubject = $4 WHERE idgrade = $5 RETURNING *", 
    [grade, actname, category, sub_idsubject, idgrade]);
    res.json(upd.rows[0]);
    } catch (error) {
      next(error);
    }
  };

module.exports = {createGrade, createCategory, deleteGrade, getGrade, getAllGrades, updateGrade, sumGrades};
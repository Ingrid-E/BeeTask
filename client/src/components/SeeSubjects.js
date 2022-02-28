import React, { useState, useEffect, useContext  } from 'react';
import {useNavigate} from "react-router-dom";
import SubjectsContext from "../context/Subjects/SubjectsContext";
function SeeSubjects(props){
    const navigate = useNavigate();

    const subjectsContext = useContext(SubjectsContext);

    const userid = props.userid;


      useEffect(()=>{

        subjectsContext.getSubjects(userid);

        },[])

   

        const handleNavigate = (idsubject) =>{
            navigate("/sections/"+userid+"/"+idsubject)
        }
    return (
     
     <>
        <h1>Mis cursos</h1>
        {
            subjectsContext.subjects.length > 0
              ? subjectsContext.subjects.map((aSubject)=>(
                <>
                <h3>{aSubject.subjectname}</h3>
                <button onClick={()=> handleNavigate(aSubject.idsubject)}>Ver materia</button>
                </>
            )
            )
          : (<h3>Aun no tienes cursos, prueba a crear uno</h3>)
        }        
        
        </>


    )

}

export default SeeSubjects;
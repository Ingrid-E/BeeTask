import React, { useState, useEffect, useContext  } from 'react';
import {useNavigate} from "react-router-dom";
import SubjectsContext from "../context/Subjects/SubjectsContext";
function SeeSubjects(props){
    const navigate = useNavigate();

    const subjectsContext = useContext(SubjectsContext);
    console.log("Subject Context", subjectsContext)

    const userid = props.userid;


      useEffect(()=>{

        subjectsContext.getSubjects(userid);

        },[])


        const handleNavigate = (idsubject) =>{
            navigate("/sections/"+userid+"/"+idsubject)
        }

        const deleteSubject = async (id) => {
          try {
              const response = await fetch("http://localhost:5000/deleteSubject/"+id, {
                  method: "DELETE",
                  headers: {
                      "Content-Type": "application/json"
                  },                })
              const dataresponse = await response.json();
              console.log(dataresponse);
          } catch (error) {
              console.log(error)
          }
      }
    return (
     <>
        <h1>Mis cursos</h1>
        {
            subjectsContext.subjects.length >0
              ? subjectsContext.subjects.map((aSubject)=>(
                <div key={`${aSubject.idsubject}`}>
                 <h3>{aSubject.subjectname}</h3>
                <button onClick={()=> handleNavigate(aSubject.idsubject)}>Ver materia</button>
                <button onClick={() => deleteSubject(aSubject.idsubject)}>Eliminar</button>

                </div>
            )
            )
          : (<h1>No tienes cursos aun, prueba a crear uno</h1>)
        }
        </>


    )

}

export default SeeSubjects;
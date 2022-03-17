import React, { useEffect, useContext, useState, Fragment  } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Tasks from './Tasks';
import SubjectsContext from '../context/Subjects/SubjectsContext';
import NewSection from './NewItem/NewSection';

function Sections(){
    let [ponderado, setPonderado] = useState(0);
    const navigate = useNavigate();
    const params = useParams();
    const idSUBJECT = params.idSUBJECT;
    const userid = params.userid;
    const subjectsContext = useContext(SubjectsContext);

    const loadTask = async () => {
        let res = await fetch("http://localhost:5000/finalGrade/" + idSUBJECT);
        let data = await res.json();
        setPonderado(data);
      };

      useEffect(()=>{
        subjectsContext.getSections(idSUBJECT);
        },[ponderado])

        
        const handleChange = async (e) =>{
            setPonderado({...ponderado, [e.target.name]:e.target.value} )
        };

        const handleButton = () =>{
            navigate("/menu/"+userid);
        }

        const deleteSection = async (id) => {
            try {
                const response = await fetch("http://localhost:5000/deleteSection/"+id, {
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
    
        loadTask();

    return (
     
     <>
        <h1>Crear una nueva seccion</h1>
        <NewSection idSUBJECT={idSUBJECT}/>

        <h1>Mis secciones</h1>
        {
        subjectsContext.sections.length > 0
            ? subjectsContext.sections.map((aSection)=>(
                
               <div key={`${aSection.idsection}`}>
               <h2>{aSection.sectionname} {aSection.gradepercentage}%</h2>
                <button onClick={() => navigate(`/section/${userid}/${idSUBJECT}/${aSection.idsection}`)}>editar</button>
                <button onClick={() => deleteSection(aSection.idsection)}>Eliminar</button>

                <Tasks userid = {userid} idSUBJECT = {idSUBJECT}  idSECTION = {aSection.idsection}/>

               </div>

                
            )
            )
        : (<h1>Aun no tienes secciones, prueba a crear una.</h1>)

        }

        <h2>Nota parcial: {ponderado}</h2>
        
        <button onClick={handleButton}>Volver al menu</button>

        </>

    )

}

export default Sections;
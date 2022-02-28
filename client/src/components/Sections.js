import React, { useEffect, useContext  } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Tasks from './Tasks';
import SubjectsContext from '../context/Subjects/SubjectsContext';
import NewSection from './NewSection'
function Sections(){
    const navigate = useNavigate();
    const params = useParams();
    const idSUBJECT = params.idSUBJECT;
    const userid = params.userid;
    const subjectsContext = useContext(SubjectsContext);

      useEffect(()=>{
        subjectsContext.getSections(idSUBJECT);
        },[])

        const handleButton = () =>{
            navigate("/menu/"+userid);
        }
    return (
     
     <>
        <h1>Crear una nueva seccion</h1>
        <NewSection idSUBJECT={idSUBJECT}/>

        <h1>Mis secciones</h1>
        {
        subjectsContext.sections.length > 0
            ? subjectsContext.sections.map((aSection)=>(
                <>
                <h3>{aSection.sectionname} {aSection.gradepercentage}%</h3>
                <Tasks idSECTION={aSection.idsection}/>
                </>
            )
            )
        : (<h1>Aun no tienes secciones, prueba a crear una.</h1>)

        }
        <button onClick={handleButton}>Volver al menu</button>
        </>


    )

}

export default Sections;
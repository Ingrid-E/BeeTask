import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Tasks from './Tasks';
function Sections(){
    const navigate = useNavigate();
    const params = useParams();
    const idSUBJECT = params.idSUBJECT;
    const userid = params.userid;
    console.log("id de la materia: ",idSUBJECT);

    const [sections, setSections] = useState([]);

      useEffect(()=>{
        getSections(idSUBJECT);
        },[])

        const getSections = async (id) =>{
            //Secciones
            const gettingSections = await fetch("http://localhost:5000/seeSections/"+id);
            const dataSections = await gettingSections.json();
            console.log("paquete: ",dataSections);
            console.log("idsubjec: ", idSUBJECT); 
            setSections(dataSections);
            
        }

        const handleButton = () =>{
            navigate("/menu/"+userid);
            console.log(sections);
        }
    return (
     
     <>
        <h1>Mis secciones</h1>
        {
            
            sections.map((aSection)=>(
                <>
                <h3>{aSection.sectionname} {aSection.gradepercentage}%</h3>
                <Tasks idSECTION={aSection.idSECTION}/>
                </>
            )
            )

        }        
        <button onClick={handleButton}>Volver al menu</button>
        </>


    )

}

export default Sections;
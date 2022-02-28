import React, { useState, useEffect  } from 'react';
import {useNavigate} from "react-router-dom";

function SeeSubjects(props){
    const navigate = useNavigate();
    const userid = props.userid;
    console.log("id del usuario: ",userid);

    const [subjects, setSubjects] = useState([]);

      useEffect(()=>{
        getSubjects(userid);
        },[])

        const getSubjects = async (id) =>{
            //cursos
            const gettingsubjects = await fetch("http://localhost:5000/seeSubjects/"+userid);
            const dataSubjects = await gettingsubjects.json();
            setSubjects(dataSubjects);
            
        }

        const handleNavigate = (idsubject) =>{
            navigate("/sections/"+userid+"/"+idsubject)
        }
    return (
     
     <>
        <h1>Mis cursos</h1>
        {
            
            subjects.map((aSubject)=>(
                <>
                <h3>{aSubject.subjectname}</h3>
                <button onClick={()=> handleNavigate(aSubject.idsubject)}>Ver materia</button>
                </>
            )
            )

        }        
        
        </>


    )

}

export default SeeSubjects;
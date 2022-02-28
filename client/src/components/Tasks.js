import React, { useState, useEffect  } from 'react';
import {useNavigate} from "react-router-dom";

function Tasks(props){
    const navigate = useNavigate();
    const idSECTION = props.idSECTION;
    console.log("id de la seccion: ",idSECTION);

    const [tasks, setTasks] = useState([]);

      useEffect(()=>{
        getTasks(idSECTION);
        },[])

        const getTasks = async (id) =>{
            //cursos
            const gettingtasks = await fetch("http://localhost:5000/seeSections/"+id);
            const datatasks = await gettingtasks.json();
            setTasks(datatasks.filter(aTask => aTask.idSECTION  == id));
            
        }


    return (
     
     <>
        <h1>Mis tareas</h1>
        {
            tasks.map((aTask)=>(
                <>
                <p>{aTask.name} nota: {aTask.grade}</p>
                </>
            )
            )
        
            
        }        
        </>


    )

}

export default Tasks;
import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Tasks(props){
    const params = useParams();
    const navigate = useNavigate();
    const idSECTION = props.idSECTION;
    
    console.log("la id es: ", idSECTION);
    const [tasks, setTasks] = useState([]);

      useEffect(()=>{
        getTasks(idSECTION);
        },[])

        const getTasks = async (id) =>{
            //cursos
            const gettingtasks = await fetch("http://localhost:5000/seeTasks/"+id);
            const datatasks = await gettingtasks.json();
            setTasks(datatasks);
            console.log(datatasks);
        }

        const handleNavigate = (taskid) =>{
            navigate("/task/"+taskid);
        }


    return (
     
     <>
        <h2>Mis tareas</h2>
        {
            tasks.length > 0
              ?tasks.map((aTask)=>(
                <>
                <p>{aTask.name} nota: {aTask.grade}<button onClick={() => handleNavigate(aTask.idtask)}>Editar</button>
                </p>
                </>
            )
            )
            :<h3>No tienes tareas en esta seccion</h3>
        
            
        }        
        </>


    )

}

export default Tasks;
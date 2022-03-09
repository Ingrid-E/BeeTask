import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";

function Tasks(props){
    const userid = props.userid;
    const idSUBJECT = props.idSUBJECT;
    const navigate = useNavigate();
    const idSECTION = props.idSECTION;
    
    const [tasks, setTasks] = useState([]);

      useEffect(()=>{
        getTasks(idSECTION);
        },[])

        const handleNavigate = (taskid) =>{
            navigate("/task/"+userid+"/"+idSUBJECT+"/"+taskid);
        }

        const seeTask = (taskid) =>{
            navigate("/taskDetails/"+userid+"/"+idSUBJECT+"/"+taskid);
        }

        const getTasks = async (id) =>{
            //cursos
            const gettingtasks = await fetch("http://localhost:5000/seeTasks/"+id);
            const datatasks = await gettingtasks.json();
            setTasks(datatasks);
        }

        const deleteTask = async (id) => {
            try {
                const response = await fetch("http://localhost:5000/deleteTask/"+id, {
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
        <h2>Mis tareas</h2>
        {
            tasks.length > 0
              ?tasks.map((aTask)=>(
                <div key={`${aTask.idtask}`}>
                <p>{aTask.name} nota: {aTask.grade}<button onClick={() => seeTask(aTask.idtask)}>Ver tarea</button><button onClick={() => handleNavigate(aTask.idtask)}>Editar</button>
                <button onClick={() => deleteTask(aTask.idtask)}>Eliminar</button>

                </p>
                </div>

                
            )
            )
            :<h3>No tienes tareas en esta seccion</h3>
        
            
        }        
        </>


    )

}

export default Tasks;
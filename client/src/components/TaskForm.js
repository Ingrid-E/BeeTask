import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";

function TaskForm(){
    const navigate = useNavigate(); 
    const params = useParams();
    const idtask = params.taskid;
    const idSUBJECT = params.idSUBJECT;
    const userid = params.userid;

    let [task, setTask] = useState({
        name: '',
        description: '',
        grade: '', 
    });

    useEffect(()=>{
        getTask(idtask);    
    },[])

        const getTask = async (id) =>{
            const gettingtask = await fetch("http://localhost:5000/seeTask/"+id);
            const datatask = await gettingtask.json();
            console.log("aver",datatask);
            setTask(datatask);
                    }
        

    const handleTask = async (e) =>{
          setTask({...task, [e.target.name]:e.target.value} )
      };

    const editTask = async (e)=>{ 
        e.preventDefault(); 
        try{
            const response = await fetch("http://localhost:5000/editTheTask/"+idtask,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(task),
            });
            const data = await response.json();
            console.log(data);
            navigate(`/sections/${userid}/${idSUBJECT}`)
        }catch(error){
            console.log(error);
        }

    }

    
      return (
     
        <>
        <form onSubmit={editTask}>
        <h1>Actualizar Tarea</h1>

                <label htmlFor="name">Titulo</label>
                <input type="text" name="name" defaultValue={task.name} onChange={handleTask}/><br></br>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" defaultValue={task.description} onChange={handleTask}/><br></br>
                <label htmlFor="grade">Nota</label>
                <input type="number" name="grade" defaultValue={task.grade} min="0.00" max="5.00" step="0.01" onChange={handleTask}/><br></br>
                
        
        <button type='submit'>Actualizar Tarea +</button>
        </form>
        
        
        </>


    )

}

export default TaskForm;
 
    

   


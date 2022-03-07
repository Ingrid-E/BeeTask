import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";

function TaskForm(props){
    const params = useParams();
    const idtask = params.taskid;

    let [task, setTask] = useState({
        name: '',
        description: '',
        grade: 0, 
    });

    useEffect(()=>{
        getTasks(idtask);    
    },[])

        const getTasks = async (id) =>{
            //cursos
            const gettingtasks = await fetch("http://localhost:5000/seeTask/"+id);
            const datatasks = await gettingtasks.json();
            setTask(datatasks);
            console.log(Object.values(datatasks)[0]);
            
            //console.log(datatasks);
        }
        

    const handleTask = async (e) =>{
          setTask({...task, [e.target.name]:e.target.value} )
      };

    const editTask = async (e)=>{ 
        e.preventDefault(); 
        const response = await fetch("http://localhost:5000/editTheTask/"+idtask,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task),
        });
        const data = await response.json();
        console.log(data);
    }

    
  

    return (
     
        <>
        <form onSubmit={editTask}>
        <h1>Actualizar Tarea</h1>

                <label htmlFor="name">Titulo</label>
                <input type="text" name="name" onChange={handleTask}/><br></br>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" onChange={handleTask}/><br></br>
                <label htmlFor="grade">Nota</label>
                <input type="number" name="grade" min="0.00" max="5.00" step="0.01" onChange={handleTask}/><br></br>
           
        
        <button type='submit'>Actualizar Tarea +</button>
        </form>
        
        
        </>


    )

}

export default TaskForm;
    /*const createsection = async (e)=>{
        e.preventDefault();

            const res = await fetch("http://localhost:5000/editTask",{
            method: "PUT",
            body: JSON.stringify(section),
            headers: {"Content-Type": "application/json"}
        });
        const resData = await res.json();
        console.log(resData);
        if(!res.ok){ 
            console.log("hubo un error al crear la seccion")
        }else{
            
            console.log("seccion: ", section);

        }
        
           <h3>Prioridad</h3>
        <label>Normal</label>
        <input type="Radio" name = "priority" value="Normal" onChange={handleTask}/>
        <label>Importante</label>
        <input type="Radio" name = "priority" value="Importante" onChange={handleTask}/>
        <label>Urgente</label>
        <input type="Radio" name = "priority" value="Urgente" onChange={handleTask}/>


                {
            task.map((aTask)=>(
                <>
                <label htmlFor="name">Titulo</label>
                <input type="text" name="name" onChange={handleTask}/><br></br>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" onChange={handleTask}/><br></br>
                <label htmlFor="grade">Nota</label>
                <input type="number" name="grade" step="0.01" onChange={handleTask}/><br></br>
                </>
            )
            )
            
        }
        */
    
 
    

   


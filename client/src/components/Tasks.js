import React, { useState, useEffect  } from 'react';

function Tasks(props){
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
            
        }


    return (
     
     <>
        <h1>Mis tareas</h1>
        {
            tasks.length > 0
              ?tasks.map((aTask)=>(
                <>
                <p>{aTask.name} nota: {aTask.grade}</p>
                </>
            )
            )
            :<h1>No tienes tareas en esta seccion</h1>
        
            
        }        
        </>


    )

}

export default Tasks;
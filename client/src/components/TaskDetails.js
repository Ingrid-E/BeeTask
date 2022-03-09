import React, { useState, useEffect, useContext  } from 'react';
import {useNavigate, useParams } from 'react-router-dom';

function TaskDetails(){
    const navigate = useNavigate();
    const params = useParams();
    const taskid = params.taskid;
    const userid = params.userid;
    const idSUBJECT = params. idSUBJECT;
    const [task, setTask] = useState({
        name: '',
        description: '',
        datetime: '',
        priority: '',
    });


      useEffect(()=>{
        getTask(taskid);
    },[])

    const getTask = async (id)=>{
        try {
            const res = await fetch("http://localhost:5000/seeTask/"+id);
            const resData = await res.json();
            console.log(resData);
            setTask(resData);
        } catch (error) {
            console.log(error);
        }
    }
    const handleNavigate = () =>{
        navigate(`/sections/${userid}/${idSUBJECT}`)
    }
    const myDate = new Date(task.datetime);
    return (
     
     <>
        <h1>{task.name}</h1>
        <p>Descripcion: {task.description}</p>
        <p>Prioridad: {task.priority}</p>
        <p>Fecha: {myDate.getDate()+"/"+myDate.getMonth()+1+"/"+myDate.getFullYear()}</p>
        <p>Hora: {myDate.getHours()+":"+myDate.getMinutes()}</p>

        <button onClick={handleNavigate}>Volver a las secciones</button>
        
        </>


    )

}

export default TaskDetails;
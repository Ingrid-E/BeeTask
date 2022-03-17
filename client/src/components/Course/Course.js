import { React, useState, useEffect } from "react";
import {get} from "../../hooks/Hooks"
import Button from '@material-ui/core/Button'
import "./Course.css";

function Course(props, {idSubject}) {
    const [subject, setSubject] = useState({})
    const [tasks, setTasks] = useState({})

    useEffect(() => {
        getSubject();
    }, [])

    const getSubject = async()=> {
        try{
            const response  = await get(`http://localhost:5000/seeOneSubject/${idSubject}`);
            setSubject(response);
        }catch(error){
            console.error(error)
        }
    }

    const getTasks = async()=> {
        try{
            const response  = await get(`http://localhost:5000/seeTasks/${idSubject}`);
            setSubject(response);
        }catch(error){
            console.error(error)
        }
    }

    return (
        <div className="course_information">
                <div className="title">
                    <h1>{subject.subjectname}</h1>
                    <p>{subject.description}</p>
                </div>
            <div className="content">
            <div className="tasks_container container">
                    <h1>Tareas</h1>
                    <div></div>
                    <Button>Agregar</Button>
                </div>
                <div className="section_container container">
                        <h1>Secciones</h1>
                        <Button >Agregar</Button>
                </div>
                </div>
            </div>
    )
}

export default Course;
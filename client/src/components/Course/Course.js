import { React, useState, useEffect } from "react";
import {get} from "../../hooks/Hooks"
import "./Course.css";

function Course({idSubject}) {
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
        <div className="course">
            <div className="title">
                <h1>{subject.subjectname}</h1>
                <p>{subject.description}</p>
            </div>
            <div className="task_component">
                <h1>Tareas</h1>
                <div className="tasks_container"></div>
            </div>
        </div>
    )
}

export default Course;
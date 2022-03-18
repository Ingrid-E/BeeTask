import { React, useState, useEffect } from "react";
import { get, post} from "../../hooks/Hooks"
import Button from '@material-ui/core/Button'
import "./Course.css";
import NewSubject from '../NewItem/NewSubject'
import NewTask from "../NewItem/NewTask";

function Course({ idSubject }) {
    const [window, setWindow] = useState({ name: null, status: false })
    const [subject, setSubject] = useState({})
    const [tasks, setTasks] = useState([])
    const [sections, setSections] = useState([]);

    useEffect(() => {
        getTasks();
        getSubject();
        getSections();
    }, [window])

    const handleChange = (value) => {
        if (value === "closed") {
            setWindow({ name: null, status: false })
        }
    };

    const getSections = async () => {
        try {
            const gettingsubjects = await fetch("http://localhost:5000/seeSections/" + idSubject);
            setSections(await gettingsubjects.json());
            console.log(sections)
        } catch (error) {
            console.error(error)
        }
    }

    const getSubject = async () => {
        try {
            const response = await get(`seeOneSubject/${idSubject}`);
            setSubject(response);
        } catch (error) {
            console.error(error)
        }
    }

    const getTasks = async () => {
        try {
            const response = await get(`getSubjectTasks/${idSubject}`);
            console.log("Tareas: ", response);
            setTasks(response);
        } catch (error) {
            console.error(error)
        }
    }

    const openWindow = (name) => {
        setWindow({ name: name, status: true })
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
                    <div className="task_content">
                    {
                        tasks.map((task) => (
                            <div className="task_info">
                                <div className="hexagon" style={task.priority ==='Urgente'? {background:'#F63131'} : (task.priority ==="Importante"? {background:'#FDC00F'}:{background:'#70E966'})}></div>
                                <div className="task_text">
                                <h3>{task.name}</h3>
                                <p>{new Date(task.datetime).toLocaleString()}</p>
                                </div>
                            </div>
                        )
                        )

                    }
                    </div>
                    <Button onClick={() => { openWindow("task") }}>Agregar</Button>
                </div>
                <div className="section_container container">
                    <h1>Secciones</h1>
                    {
                        sections.map((section) => (
                            <div>
                                {console.log(section)}
                                <h1>{section.sectionname}</h1>
                                <h1>{section.gradepercentage}%</h1>
                            </div>
                        )
                        )

                    }
                    <Button onClick={() => { openWindow("section") }}>Agregar</Button>
                </div>
            </div>
            {window.name === 'section' ? (
                <NewSubject idsubject={idSubject} window={handleChange} />
            ) : null}
            {window.name === 'task' ? (
                <NewTask idsubject={idSubject} window={handleChange}/>
            ) : null}
        </div>
    )
}

export default Course;
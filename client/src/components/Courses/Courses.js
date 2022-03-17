import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@material-ui/core/Button'
import AddIcon from '@mui/icons-material/Add';
import NewSubject from "../NewItem/NewSubject";
import "./Courses.css";
import Course from "../Course/Course";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Courses({ userid }) {
    console.log("azucar:", userid)
    const [state, setState] = useState(false)
    const [subjects, setSubjects] = useState([]);
    const [subject, showSubject] = useState({ visibility: false, idSubject: null })
    const navigate = useNavigate();

    useEffect(() => {
        getSubjects();
    }, [state])

    const getSubjects = async () => {
        try {
            const gettingsubjects = await fetch("http://localhost:5000/seeSubjects/" + userid);
            setSubjects(await gettingsubjects.json());
        } catch (error) {
            console.error(error)
        }

    }

    const handleClick = async (e) => {
        setState(true)
    };

    const handleChange = (value) => {
        console.log(value);
        if (value === "closed") {
            setState(false)
        }
    };

    const loadSubject = (idsubject) => {
        showSubject({ visibility: true, idSubject: idsubject })
    }

    return (
        <div className={state ? "courses block" : "courses"}>
            {!subject.visibility ? (
                <div>
                <div className="courses_container">
                    <h1>Cursos</h1>
                    <div className="show_courses">
                        {

                            subjects.map((aSubject) => (
                                <>
                                    <div className="course" onClick={() => { loadSubject(aSubject.idsubject) }}>
                                        <div className="hexagon"></div>
                                        <h1>{aSubject.subjectname}</h1>
                                    </div>
                                </>
                            )
                            )

                        }

                    </div>
                    <Button
                        endIcon={<AddIcon />}
                        onClick={handleClick}>Nuevo Curso</Button>
                </div>
                       {state ? <NewSubject className="newSubject" userid={userid} window={handleChange} /> : null}
                </div>
            ):((
                <div>
                     <Button startIcon={<ArrowBackIcon/>}>Volver</Button>
                     <Course idSubject= {subject.idSubject} goBack={handleChange}/>
                </div>
            ))}


        </div>
    )
}

export default Courses;
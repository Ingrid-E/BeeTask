import { React, useState, useEffect } from "react";
import Button from '@material-ui/core/Button'
import AddIcon from '@mui/icons-material/Add';
import NewSubject from "../NewItem/NewSubject";
import NewSection from "../NewItem/NewSection";
import "./Courses.css";

function Courses({ userid }) {
    const [state, setState] = useState(false)
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        getSubjects(userid);
    }, [state])

    const getSubjects = async () => {
        try{
            const gettingsubjects = await fetch("http://localhost:5000/seeSubjects/" + userid);
            setSubjects(await gettingsubjects.json());
        }catch(error){
            console.error(error)
        }

    }

    const handleClick = async (e) => {
        setState(true)
    };

    const handleChange = (value) => {
        if (value === "closed") {
            setState(false)
        }
    };

    return (
        <div className={state ? "courses block" : "courses"}>
            <div className="courses_container">
                <h1>Cursos</h1>
                <div className="show_courses">
                {

                    subjects.map((aSubject) => (
                        <>
                            <div className="course">
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
            {
                state ? <NewSubject className="newSubject" userid={userid} window={handleChange} /> : null
            }

        </div>
    )
}

export default Courses;
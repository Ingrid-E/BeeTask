import React from "react";
import Button from '@material-ui/core/Button'
import "./Courses.css";

function Courses(){
    return(
        <div className="courses">
            <div className="courses_container">
                <h1>Cursos</h1>
                <Button>Nuevo Agregar</Button>
            </div>

        </div>
    )
}

export default Courses;
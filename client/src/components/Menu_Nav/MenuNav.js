import React from "react";
import "./MenuNav.css";
import { ReactComponent as House } from "../../assets/Images/Icons/house-door.svg";
import { ReactComponent as Calendar } from "../../assets/Images/Icons/calendar.svg";
import { ReactComponent as Note } from "../../assets/Images/Icons/note.svg";
import { ReactComponent as Folder } from "../../assets/Images/Icons/folder.svg";
import { ReactComponent as Calculator } from "../../assets/Images/Icons/calculator.svg";

function MenuNav({name}) {
    return (
        <div className="dashboard">
            <div>
            <House/>
            <h1>Inicio</h1>
            </div>
            <div>
            <Calendar/>
            <h1>Horario</h1>
            </div>
            <div>
            <Note/>
            <h1>Tareas</h1>
            </div>
            <div>
            <Folder/>
            <h1>Materias</h1>
            </div>
            <div>
            <Calculator/>
            <h1>Calculadora</h1>
            </div>
        </div>
    );
}

export default MenuNav;
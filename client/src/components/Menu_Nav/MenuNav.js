import {React, useState} from "react";
import "./MenuNav.css";
import { ReactComponent as House } from "../../assets/Images/Icons/house-door.svg";
import { ReactComponent as Folder } from "../../assets/Images/Icons/folder.svg";
import { ReactComponent as Calculator } from "../../assets/Images/Icons/calculator.svg";

function MenuNav(props) {

    const handleClick = (section)=>{
        props.nav(section)
    }

    return (
        <div className="MenuNav">
            <div onClick={()=>{handleClick("Home")}}>
            <House/>
            <h1>Inicio</h1>
            </div>
            <div onClick={()=>{handleClick("Courses")}}>
            <Folder/>
            <h1>Materias</h1>
            </div>
            <div onClick={()=>{handleClick("Calculator")}}>
            <Calculator/>
            <h1>Calculadora</h1>
            </div>
        </div>
    );
}

export default MenuNav;
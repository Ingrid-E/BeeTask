import {React, useState} from "react";
import "./MenuNav.css";
import { ReactComponent as House } from "../../assets/Images/Icons/house-door.svg";
import { ReactComponent as Folder } from "../../assets/Images/Icons/folder.svg";
import { ReactComponent as Calculator } from "../../assets/Images/Icons/calculator.svg";
import ImageLogo from "../../assets/Images/BeeTask.svg";
import ImageDots from "../../assets/Images/Dashboard/Dashboard-icons/log-out.png";
import ImageBlackboard from "../../assets/Images/Dashboard/Dashboard-icons/blackboard.png";
import ImageCalculator from "../../assets/Images/Dashboard/Dashboard-icons/calculadora.png";
import ImageHouse from "../../assets/Images/Dashboard/Dashboard-icons/house.png";

function MenuNav(props) {

    const handleClick = (section)=>{
        props.nav(section)
    }

    return (
        <div className="MenuNav">
            <img className="img-beetask" src={ImageLogo} alt="beetask.svg"></img>
            <div className="MenuNav-options">
                <div className="House-option option" onClick={()=>{handleClick("Home")}}>
                <img className="img-house" src={ImageHouse} alt="house.png"></img>
                <h1>Inicio</h1>
                </div>
                <div className="class-option option" onClick={()=>{handleClick("Courses")}}>
                <img className="img-blackboard" src={ImageBlackboard} alt="blackboard.png"></img>
                <h1>Cursos</h1>
                </div>
            </div>
            <a className="logout-button" href="Home"><img className="img-dots" src={ImageDots} alt="dots-menu.png"></img></a>
        </div>
    );
}

export default MenuNav;
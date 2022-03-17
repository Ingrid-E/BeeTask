import React from "react";
import Button from '@material-ui/core/Button';
import ImageBee from '../../assets/Images/Bee.png';
import Calendar from "../Calendar/Calendar";
import "./HomeDash.css";
import DatePicker from "sassy-datepicker";

function Courses(){
    return(
        <div className="home">
            <div className="home__container">
                <div className="home__container-header">
                    <div className="home__container-header-info">
                        <div className="home__container-header-info-text">
                            <h1>Hola Jean Pierre, Bienvenido a Beetask</h1>
                            <h2>Miercoles, 16 de marzo <span>11:08 pm</span></h2>
                        </div>
                        <img className="bee" src={ImageBee} alt="Bee.png"></img>
                    </div>
                </div>
                <div className="home__container-body">
                    <div className="home__container-body-items">
                        <div className="home__container-body-counters">
                            <div className="home__container-body-counters-tasks counter">
                                <h1>8</h1>
                                <h2>Tareas Pendientes</h2>
                            </div>
                            <div className="home__container-body-counters-courses counter">
                                <h1>6</h1>
                                <h2>Cursos Matriculados</h2>
                            </div>
                        </div>
                        <div className="home__container-body-tasks">
                            <div className="home__container-body-tasks-container">
                                <div className="home__container-body-tasks-container-body">
                                    <h1>Tareas</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__container-body-items">
                        <div className="home__container-body-calendar">
                            <div className="home__container-body-calendar-container">
                                <div className="home__container-body-calendar-container-body">
                                    <h1>Calendario</h1>
                                    <Calendar/>
                                </div>
                            </div>
                        </div>
                        <div className="home__container-body-courses">
                            <div className="home__container-body-courses-container">
                                <div className="home__container-body-courses-container-body">
                                    <h1>Cursos</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;
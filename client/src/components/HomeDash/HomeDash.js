import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ImageBee from "../../assets/Images/Bee.png";
import ImageHexagons from "../../assets/Images/Hexagons-dashboard.png";
import ImageHexagon from "../../assets/Images/Hexagon-Courses.png";
import Calendar from "../Calendar/Calendar";
import "./HomeDash.css";

function HomeDash({ userid }) {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    getSubjects();
  }, []);

  const getSubjects = async () => {
    try {
      const gettingsubjects = await fetch(
        "http://localhost:5000/seeSubjects/" + userid
      );
      setSubjects(await gettingsubjects.json());
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard__home">
      <div className="dashboard__home-container">
        <div className="dashboard__home-container-header">
          <div className="dashboard__home-container-header-info">
            <div className="dashboard__home-container-header-info-text">
              <h1>
                Hola <span>Jean Pierre</span>, Bienvenido a Beetask
              </h1>
              <h2>
                Miercoles, 16 de marzo <span>11:08 pm</span>
              </h2>
            </div>
            <img className="bee" src={ImageBee} alt="Bee.png"></img>
          </div>
        </div>
        <div className="dashboard__home-container-body">
          <div className="dashboard__home-container-body-items">
            <div className="dashboard__home-container-body-counters">
              <div className="dashboard__home-container-body-counters-tasks counter">
                <h1>8</h1>
                <h2>Tareas Pendientes</h2>
                <img
                  className="hexagons-background"
                  src={ImageHexagons}
                  alt="Hexagons-Background.png"
                ></img>
              </div>
              <div className="dashboard__home-container-body-counters-courses counter">
                <h1>6</h1>
                <h2>Cursos Matriculados</h2>
                <img
                  className="hexagons-background"
                  src={ImageHexagons}
                  alt="Hexagons-Background.png"
                ></img>
              </div>
            </div>
            <div className="dashboard__home-container-body-tasks">
              <div className="dashboard__home-container-body-tasks-container">
                <div className="dashboard__home-container-body-tasks-container-body">
                  <h1>Tareas</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard__home-container-body-items">
            <div className="dashboard__home-container-body-calendar">
              <div className="dashboard__home-container-body-calendar-container">
                <h1>Calendario</h1>
                <Calendar />
                <img
                  className="hexagons-background"
                  src={ImageHexagons}
                  alt="Hexagons-Background.png"
                ></img>
              </div>
            </div>
            <div className="dashboard__home-container-body-courses">
              <div className="dashboard__home-container-body-courses-container">
                <h1>Cursos</h1>
                <div className="dashboard__home-container-body-courses-container-list">
                  {subjects.map((aSubject) => (
                    <>
                      <div className="course">
                      <img className="hexagon-course" src={ImageHexagon} alt="hexagon-course.png"></img>
                        <h1>{aSubject.subjectname}</h1>
                      </div>
                    </>
                  ))}
                </div>
                <img
                  className="hexagons-background"
                  src={ImageHexagons}
                  alt="Hexagons-Background.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeDash;

import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ImageBee from "../../assets/Images/Bee.png";
import ImageHexagons from "../../assets/Images/Hexagons-dashboard.png";
import ImageHexagon from "../../assets/Images/Hexagon-Courses.png";
import Calendar from "../Calendar/Calendar";
import "./HomeDash.css";
import { post,get } from "../../hooks/Hooks";

function HomeDash({ userid }) {
  const [subjects, setSubjects] = useState([]);
  const [taskCount, setTaskCount] = useState(0);
  const [subjectCount, setSubjectCount] = useState(0);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getSubjects();
    getTasks();
    countTasks();
    countSubjects();
  }, []);

  const getTasks = async () => {
    try {
        const response = await get(`getUserTasks/${userid}`);
        console.log("Tareas: ", response);
        setTasks(response);
    } catch (error) {
        console.error(error)
    }
}

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

  const countTasks = async () => {
    try {
      const response = await (await post("countTasks/", {'userid': userid})).json();
      setTaskCount(response.taskscounted);
    } catch (error) {
      console.error(error);
    }
  };

  const countSubjects = async () => {
    try {
      const response = await (await post("countSubjects/", {'userid': userid})).json();
      setSubjectCount(response.subjectscounted);
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
                <h1>{taskCount}</h1>
                <h2>Tareas Pendientes</h2>
                <img
                  className="hexagons-background"
                  src={ImageHexagons}
                  alt="Hexagons-Background.png"
                ></img>
              </div>
              <div className="dashboard__home-container-body-counters-courses counter">
                <h1>{subjectCount}</h1>
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
                      <div className="course" >
                      <img className="hexagon-course" src={ImageHexagon} alt="hexagon-course.png"></img>
                        <h1>{aSubject.subjectname}</h1>
                      </div>
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
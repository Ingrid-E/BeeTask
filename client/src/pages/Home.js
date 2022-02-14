/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import NavBar from "../components/NavBar"
import './pages.css'
import PeopleImages from '../assets/Images/People-Images.png'
function Home(){

    return (
        <div className="home">
          <NavBar/>
          <div className="home__start">
            <div className="home__start-text">
            <h1>Organizate a tu manera</h1>
            <p>Todas las herramientas que necesitas en un solo lugar. Comienza a utilizarlas ya!</p>
            <button className="yellow-button">REGISTRARSE</button>
            </div>
          </div>
          <div className="home__section2">
            <span className="hex hex-left"></span>
            <div className="home__section2-text">
            <div className="text-float">
              <h1>Tareas</h1>
              <p>Organiza tus tareas por materia y fecha. Puedes agregar la dificultad de cada una y priorizar cuales hacer primero.</p>
            </div>
            <div className="text-float">
              <h1>Notas</h1>
              <p>Agrega las notas de tus tareas, para tener en cuenta tu rendimiento en esa materia.</p>
            </div>
            <div className="text-float">
              <h1>Calcula</h1>
              <p>Calcula tu nota en la materia y cuanto necesitas para pasar!</p>
            </div>
          </div>
          <span className="hex hex-right"></span>
          </div>
        </div>
    )
}

export default Home;
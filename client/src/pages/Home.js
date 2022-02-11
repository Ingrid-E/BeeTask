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
            <div className="home__start-image">
            <img src={PeopleImages}></img>
            </div>
          </div>
          <div className="home__section2">
          </div>
        </div>
    )
}

export default Home;
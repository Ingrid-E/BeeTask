/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavBar from "../components/NavBar";
import BeeHive from '../assets/Images/BeeHive.png'
import Image from '../assets/Images/placeholder.png'
import "./pages.css";
function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="home__start">
        <div className="home__start-text">
          <h1>Organizate a tu manera</h1>
          <p>
            Todas las herramientas que necesitas en un solo lugar. Comienza a
            utilizarlas ya!
          </p>
          <button className="yellow-button"><a href="Register">REGISTRARSE</a></button>
        </div>
        <div class="home__hexagons-container">
            <div class="home__group-hexagons">
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
            </div>
            <div class="home__group-hexagons">
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
            </div>
            <div class="home__group-hexagons">
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
            </div>
            <div class="home__group-hexagons">
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
                <div class="home__hexagon-container"></div>
            </div>
        </div>
      </div>
      <div className="home__section2">
        <div className="home__section2-text">
          <div className="text-float">
            <h1>Tareas</h1>
            <p>
              Organiza tus tareas por materia y fecha. Puedes agregar la
              dificultad de cada una y priorizar cuales hacer primero.
            </p>
          </div>
          <div className="text-float">
            <h1>Notas</h1>
            <p>
              Agrega las notas de tus tareas, para tener en cuenta tu
              rendimiento en esa materia.
            </p>
          </div>
          <div className="text-float">
            <h1>Calcula</h1>
            <p>Calcula tu nota en la materia y cuanto necesitas para pasar!</p>
          </div>
        </div>
        <div className="home__section2-background">
          <div className="hex hex-left"></div>
          <div className="hex hex-right"></div>
          <div className="bee bee-top"></div>
          <div className="bee bee-down"></div>
        </div>
      </div>
      <div className="home__info">
      <div className="home__info-content">
        <div className="home__info-text">
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            non elementum in tempor, a dis. Quis nisl vel sodales praesent elit
            amet. Tempor venenatis diam vulputate fames commodo. Ac id proin
            molestie egestas elit at gravida vehicula sed.
          </p>
          <button className="yellow-button">Texto</button>
        </div>
        <img src={BeeHive}></img>
      </div>
      <div className="home__info-bees">
        <div className="bee bee-top"></div>
          <div className="bee bee-down"></div>
      </div>
      </div>
      <div className="home__info placeholder">
      <div className="home__info-content">
        <img src={Image}></img>
        <div className="home__info-text">
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            non elementum in tempor, a dis. Quis nisl vel sodales praesent elit
            amet. Tempor venenatis diam vulputate fames commodo. Ac id proin
            molestie egestas elit at gravida vehicula sed.
          </p>
          <button className="yellow-button">Texto</button>
        </div>
      </div>
      <div className="home__info-bees">
        <div className="bee bee-top"></div>
      </div>
      </div>
      <div className="home__info placeholder no-reverse">
      <div className="home__info-content">
        <div className="home__info-text">
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            non elementum in tempor, a dis. Quis nisl vel sodales praesent elit
            amet. Tempor venenatis diam vulputate fames commodo. Ac id proin
            molestie egestas elit at gravida vehicula sed.
          </p>
          <button className="yellow-button">Texto</button>
        </div>
        <img src={Image}></img>
      </div>
      <div className="home__info-bees">
        <div className="bee bee-top"></div>
      </div>
      </div>
      <div className="home__info placeholder">
      <div className="home__info-content">
        <img src={Image}></img>
        <div className="home__info-text">
          <h1>Titulo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            non elementum in tempor, a dis. Quis nisl vel sodales praesent elit
            amet. Tempor venenatis diam vulputate fames commodo. Ac id proin
            molestie egestas elit at gravida vehicula sed.
          </p>
          <button className="yellow-button">Texto</button>
        </div>
      </div>
      <div className="home__info-bees">
        <div className="bee bee-top"></div>
      </div>
      </div>
    </div>
  );
}

export default Home;

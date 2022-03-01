/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import NavBar from "../components/NavBar";
import Image1 from '../assets/Images/home-media/home-icons/clock.png';
import Image2 from '../assets/Images/home-media/home-icons/calculator.png';
import Image3 from '../assets/Images/home-media/home-icons/calendar.png';
import Image4 from '../assets/Images/home-media/home-icons/flash-cards.png';
import Image5 from '../assets/Images/home-media/home-icons/grade.png';
import Image6 from '../assets/Images/home-media/home-icons/notepad.png';
import ImageFacebook from '../assets/Images/home-media/home-icons/Facebook-icon.png';
import ImageInstagram from '../assets/Images/home-media/home-icons/Instagram-icon.png';
import ImageTwitter from '../assets/Images/home-media/home-icons/Twitter-icon.png';
import Image7 from '../assets/Images/Bee.png';
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
        <div className="home__hexagons-container">
            <div className="home__group-hexagons">
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
            </div>
            <div className="home__group-hexagons">
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
            </div>
            <div className="home__group-hexagons">
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
            </div>
            <div className="home__group-hexagons">
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
                <div className="home__hexagon-container"></div>
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
            <h1>Todo en uno</h1>
            <p>
            Encuentra todas las herramientas utiles para mejorar tu rendimiento academico siendo mas organizado.
            </p>
            <button className="yellow-button">Texto</button>
            <img className="bee" src={Image7}></img>
            <img className="bee" src={Image7}></img>
          </div>
          <div class="info__hexagons-container">
              <div className="info__group-hexagons">
                  <div className="info__hexagon-container"><img className="hexagon-img" src={Image1}></img></div>
                  <div className="info__hexagon-container"><img className="hexagon-img" src={Image2}></img></div>
              </div>
              <div className="info__group-hexagons">
                  <div className="info__hexagon-container"><img className="hexagon-img" src={Image3}></img></div>
                  <div className="info__hexagon-container"><img className="hexagon-img" src={Image4}></img></div>
                  <div className="info__hexagon-container"><img className="hexagon-img" src={Image5}></img></div>
              </div>
              <div className="info__group-hexagons">
                  <div className="info__hexagon-container"><img className="hexagon-img" src={Image6}></img></div>
                  <div className="info__hexagon-container"><img className="hexagon-img" src={Image1}></img></div>
              </div>
          </div>
        </div>
        <div className="home__info-content">
          <div class="home__info-image-container"></div>
          <div className="home__info-text">
            <h1>Todo en uno</h1>
            <p>
            Encuentra todas las herramientas utiles para mejorar tu rendimiento academico siendo mas organizado.
            </p>
            <button className="yellow-button">Texto</button>
            <img className="bee" src={Image7}></img>
            <img className="bee" src={Image7}></img>
          </div>
        </div>
        <div className="home__info-content">
          <div className="home__info-text">
            <h1>Todo en uno</h1>
            <p>
            Encuentra todas las herramientas utiles para mejorar tu rendimiento academico siendo mas organizado.
            </p>
            <button className="yellow-button">Texto</button>
            <img className="bee" src={Image7}></img>
            <img className="bee" src={Image7}></img>
          </div>
          <div class="home__info-image-container"></div>
        </div>
        <div className="home__info-content">
          <div class="home__info-image-container"></div>
          <div className="home__info-text">
            <h1>Todo en uno</h1>
            <p>
            Encuentra todas las herramientas utiles para mejorar tu rendimiento academico siendo mas organizado.
            </p>
            <button className="yellow-button">Texto</button>
            <img className="bee" src={Image7}></img>
            <img className="bee" src={Image7}></img>
          </div>
        </div>
        <div className="home__info-content">
          <h1>Video</h1>
          <div class="home__info-video-container">
            <div className="hexagon-container"></div>
            <div className="hexagon-container"></div>
          </div>
        </div>
      </div>
      <div className="home__testimonials">
        <h1>Testimonios</h1>
        <div className="home__testimonials-container">
          <div className="home__testimonial-container">
            <div className="hexagon-image-container"></div>
            <div className="hexagon-text-container">
              <h1>Alan Mocoho</h1>
              <p>La mejor aplicacion para organizar tu vida y salir adelante</p>
            </div>
          </div>
          <div className="home__testimonial-container">
            <div className="hexagon-image-container"></div>
            <div className="hexagon-text-container">
              <h1>Alan Mocoho</h1>
              <p>La mejor aplicacion para organizar tu vida y salir adelante</p>
            </div>
          </div>
          <div className="home__testimonial-container">
            <div className="hexagon-image-container"></div>
            <div className="hexagon-text-container">
              <h1>Alan Mocoho</h1>
              <p>La mejor aplicacion para organizar tu vida y salir adelante</p>
            </div>
          </div>
          <div className="home__testimonial-container">
            <div className="hexagon-image-container"></div>
            <div className="hexagon-text-container">
              <h1>Alan Mocoho</h1>
              <p>La mejor aplicacion para organizar tu vida y salir adelante</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__register">
        <h1 className="home__register-title">¿Que estas esperando?</h1>
        <p className="home__register-text">Empieza a organizarte ahora mismo con nosotros</p>
        <button className="yellow-button">Registrarse</button>
      </div>
      <div className="home__footer">
        <div className="home__footer-us-container">
          <h1>Nosotros</h1>
          <a href="Home">Sobre Nosotros</a>
          <a href="Home">Recursos</a>
        </div>
        <div className="home__footer-tools-container">
          <h1>Herramientas</h1>
          <a href="Home">Calculadora de Notas</a>
          <a href="Home">Creacion de Materias</a>
          <a href="Home">Lista de tareas</a>
          <a href="Home">Blogs</a>
        </div>
        <div className="home__footer-social-container">
          <h1>Redes Sociales</h1>
          <a href="Home"><img src={ImageFacebook}></img>Facebook</a>
          <a href="Home"><img src={ImageInstagram}></img>Instagram</a>
          <a href="Home"><img src={ImageTwitter}></img>Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default Home;

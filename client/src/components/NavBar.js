import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/Images/BeeTask.svg";
import "./components.css";
import "./hamburger.css";
import "./NavBar.css";
function NavBar() {
  const [menu, setMenu] = useState(false);
  return (
    <div className="navbar">
      <Logo className="navbar__logo"></Logo>
      <ul className={menu ? "open" : ""}>
        <li>INICIO</li>
        <li>NOSOTROS</li>
        <li>RECURSOS</li>
        <li className="navbar__important"><a href="Login">INICIAR SESIÓN</a></li>
        <li className="navbar__button yellow-button"><a href="Register">REGISTRARSE</a></li>
      </ul>
      <div
        className={`navbar__hamburger ${menu ? "open" : ""}`}
        onClick={() => {
          setMenu(!menu);
        }}
        >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default NavBar;

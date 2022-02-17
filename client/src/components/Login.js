import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {}, [user]);

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.message === "The email typed is not registered") {
      console.log("El email ingresado aun no ha sido registrado");
    } else if (resData.message === "password is incorrect") {
      console.log("Contraseña incorrecta");
    } else {
      //si todo va bien, tira un true -> resData===true
      navigate("/");
    }
  };

  return (
    <div className="login-form">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div className="email">
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="password">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
        </div>

        <button type="submit">Entrar</button>
      </form>
      <span className="noTieneCuenta">
        No tienes cuenta aun?<a href="Register">Registrate</a>
      </span>
    </div>
  );
}

export default Login;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./components.css";
import "./Login.css";
import TextField from '@material-ui/core/TextField'
import {post} from "../hooks/Hooks"

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
    fetchUser(user);
  };

  async function fetchUser(login) {
    try {
      const response = await post(`login`, login);
      console.log(response)
    } catch (error) {
      if (error.response.status === 404) {
        console.log("El usuario no existe")
      } else if (error.response.status === 500) {
        console.error(error.response);
      }
    }
  }

  return (
    <div className="login-form">
      <h1>Iniciar Sesión</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
        <TextField
            value={user.email}
            variant="filled"
            onChange={handleChange}
            size="small"
            label="Correo"
            name="email"
            fullWidth
          />
          <TextField
            value={user.password}
            variant="filled"
            onChange={handleChange}
            size="small"
            type="password"
            label="Constraseña"
            name="password"
            fullWidth
          />
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

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/Images/BeeTask.svg";
import "./Login.css";
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {post, get} from "../hooks/Hooks"

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
      if(response.status === 200){
        try{
          const data = await get(`login/${user.email}`, login);
          navigate("/menu", {state: data});
        }catch(error){
          if (error.response.status === 404) {
            console.log("El usuario no existe")
          } else if (error.response.status === 500) {
            console.error(error.response);
          }
        }
      }
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
      <div className="login-form__title">
      <Logo/>
      <h1>Iniciar Sesión</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div>
          <h2>Usuario</h2>
        <TextField
            value={user.email}
            variant="outlined"
            onChange={handleChange}
            size="small"
            name="email"
            fullWidth
          />
          </div>
          <div>
          <h2>Contraseña</h2>
          <TextField
            value={user.password}
            variant="outlined"
            onChange={handleChange}
            size="small"
            type="password"
            name="password"
            fullWidth
          />
          </div>
        </div>
        <Button
        variant="contained"
        type="submit"
        >Iniciar Sesion</Button>
      </form>
      <span className="noTieneCuenta">
        No tienes cuenta aun?<a href="Register">Registrate</a>
      </span>
    </div>
  );
}

export default Login;

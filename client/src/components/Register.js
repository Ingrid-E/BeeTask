import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../hooks/Hooks";
import "./Register.css"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { ReactComponent as Logo } from "../assets/Images/BeeTask.svg";
function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    names: "",
    surnames: "",
  });

  useEffect(() => {}, [user]);

  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const expression = {
    password:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_|¬°{}\-><¿%*^#?&])[A-Za-z\d@$!_|¬°{}\-><¿%*^#?&]{5,30}/,
    name: /^[a-zA-Z]{2,32}(([ ][a-zA-Z]{2,32}){1,2})?$/,
    email: /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+[.][A-Za-z]+$/,
  };

  const validateFormData = (data, dataType) => {
    switch (dataType) {
      case "email":
        console.log(expression.email.test(data))
        return expression.email.test(data);
      case "password":
        return expression.password.test(data);
      case "name":
        return expression.name.test(data);
      default:
        return false;
    }
  };

  const registerUser = async () => {
    try {
      const resData = await post("register", user);
      console.log(resData);
      navigate("/login");
    } catch (error) {
      if (error.response.status === 406) {
        console.error(error.response);
        console.log("Email ya en uso")
      } else if (error.response.status === 500) {
        console.error(error.response);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateFormData(user.email, "email")) {
      console.log("Inserte un email valido. Ejemplo: anonymus@gmail.com");
    } else if (!validateFormData(user.password, "password")) {
      console.log(
        "Las contraseñas deben tener al menos 5 caracteres, incluir mayusculas, numeros y caracteres especiales."
      );
    } else if (!validateFormData(user.names, "name")) {
      console.log(
        "Los nombres solo pueden llevar letras y no puedes tener mas de 3 nombres, ejemplo: Carla Martina"
      );
    } else if (!validateFormData(user.surnames, "name")) {
      console.log(
        "Los apellidos solo pueden llevar letras y no puedes tener mas de 3 apellidos, ejemplo: Orwell Huxley"
      );
    } else {
      registerUser();
    }
  };

  return (
    <div className="register-form">
      <div className="register-form__title">
      <Logo/>
      <h1>Registrarse</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div>
            <h2>Correo</h2>
            <TextField
            value={user.email}
            variant="outlined"
            onChange={handleChange}
            size="small"
            name="email"
            error = {!validateFormData(user.email, "email") && user.email !== ""}
            helperText = "Ejemplo@correo.com"
            fullWidth
          />
          </div>
          <div>
            <h2>Nombre</h2>
            <TextField
            value={user.names}
            variant="outlined"
            onChange={handleChange}
            size="small"
            name="names"
            error = {!validateFormData(user.names, "name") && user.names !== ""}
            fullWidth
          />
          </div>
          <div>
            <h2>Apellidos</h2>
            <TextField
            value={user.surnames}
            variant="outlined"
            onChange={handleChange}
            size="small"
            name="surnames"
            error = {!validateFormData(user.surnames, "name") && user.surnames !== ""}
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
            name="password"
            type="password"
            error = {!validateFormData(user.password, "password") && user.password!== ""}
            helperText = "Debe tener al menos 5 caracteres, mayusculas, numeros y caracteres especiales."
            fullWidth
          />
          </div>
        </div>
        <Button
        variant="contained"
        type="submit"
        >Registrarse</Button>
      </form>
      <span className="noTieneCuenta">
        Ya tienes una cuenta?<a href="Login">Inicia Sesión</a>
      </span>
    </div>
  );
}

export default Register;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../hooks/Hooks";

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
        return expression.email.test(data);
        break;
      case "password":
        return expression.password.test(data);
        break;
      case "name":
        return expression.name.test(data);
        break;
      default:
        return false;
        break;
    }
  };

  const registerUser = async () => {
    try {
      const resData = await post("/register", user);
      console.log(resData);
    } catch (error) {
      console.log("Error en la BD: ", error.message);
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
      navigate("/login");
    }
  };

  return (
    <div className="register-form">
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
          <div className="email">
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="name">
            <label htmlFor="name">Nombre</label>
            <input type="name" name="names" onChange={handleChange} />
          </div>
          <div className="surnames">
            <label htmlFor="surnames">Apellidos</label>
            <input type="family-name" name="surnames" onChange={handleChange} />
          </div>
          <div className="password">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
        </div>

        <button type="submit">Listo</button>
      </form>
      <span className="noTieneCuenta">
        Ya tienes una cuenta?<a href="Login">Inicia Sesión</a>
      </span>
    </div>
  );
}

export default Register;


import React, { useState, useEffect  } from 'react';
import {useNavigate} from "react-router-dom";


function Register(){
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        names: "",
        surnames: ""
      });


      useEffect(()=>{
    
      
        },[user])

      const handleChange = async (e) =>{
        setUser({...user, [e.target.name]:e.target.value} )
    };

    const validatePassword = (aPassword)=>{
        const expression = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!_|¬°{}\-><¿%*^#?&])[A-Za-z\d@$!_|¬°{}\-><¿%*^#?&]{5,30}/;
        if(expression.test(aPassword)){
            return true;
        }

        return false;
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!validatePassword(user.password)){
            console.log("La contraseña debe tener entre 5 y 30 caracteres, debe incluir numeros, caracteres especiales y mayusculas.")
        }else{
            const res = await fetch("http://localhost:5000/register",{
            method: "POST",
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json"}
        });
        const resData = await res.json();
        if(resData.message === 'new row for relation "users" violates check constraint "valid_names"'){
            console.log("Debe escribir sus dos primeros nombres sin usar numeros ni caracteres especiales, ejemplo: Camila Mamasota")
        }else if(resData.message === 'new row for relation "users" violates check constraint "valid_email"'){
            console.log("Escriba un email valido por favor, ejemplo: pabloescobar@hornymail.com");
        }else if(resData.message === 'new row for relation "users" violates check constraint "valid_surnames"'){
            console.log("Debe escribir sus dos primeros apellidos sin usar numeros ni caracteres especiales, ejemplo: Aguilar Gutierrez")
        }else{
            navigate("/login");

        }
        }
            
    
 
    }

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" onChange={handleChange}/>
        <label htmlFor="name">names</label><input type="name" name="names" onChange={handleChange}/>
        <label htmlFor="surnames">surnames</label><input type="family-name" name="surnames" onChange={handleChange}/>
        <label htmlFor="password">password</label><input type="password" name="password" onChange={handleChange}/>
        <div >

        </div>
        <button type='submit'>Submit!</button>
        </form>
        
        
        </>


    )

}

export default Register;
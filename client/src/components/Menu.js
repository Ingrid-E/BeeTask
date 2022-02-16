import React, { useState, useEffect  } from 'react';
import {useNavigate} from "react-router-dom";


function Login(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');


      useEffect(()=>{
    
      
        },[userName])

      const handleChange = async (e) =>{
        setUser({...user, [e.target.name]:e.target.value} )
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
            const res = await fetch("http://localhost:5000/login",{
            method: "POST",
            body: JSON.stringify(user),
            headers: {"Content-Type": "application/json"}
        });
        const resData = await res.json();
        if(resData.message === 'The email typed is not registered'){
            console.log("El email ingresado aun no ha sido registrado");
        }else if(resData.message === 'password is incorrect'){
            console.log("Contraseña incorrecta");
        }else{
            //si todo va bien, tira un true -> resData===true
            navigate("/");

        }
    
 
    }

    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input type="email" name="email" onChange={handleChange}/>
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={handleChange}/>
        <div >

        </div>
        <button type='submit'>Submit!</button>
        </form>
        
        
        </>


    )

}

export default Login;
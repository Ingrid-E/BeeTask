import React, { useState, useEffect  } from 'react';
import {useNavigate} from "react-router-dom";

function NewSubject(props){
    const navigate = useNavigate();
    const userid = props.userid;
    console.log("id del usuario: ",userid);
    
    const [subject, setSubject] = useState({
        subjectName: '',
        description: '',
        userid: userid,
    });
    
      useEffect(()=>{
      
        },[subject])

      const handleSubject = async (e) =>{
          
        setSubject({...subject, [e.target.name]:e.target.value} )
    };

    const createSubject = async (e)=>{
        e.preventDefault();

            const res = await fetch("http://localhost:5000/addSubject",{
            method: "POST",
            body: JSON.stringify(subject),
            headers: {"Content-Type": "application/json"}
        });
        const resData = await res.json();
        console.log(resData);
        if(!res.ok){ 
            console.log("hubo un error al crear la materia")
        }else{
            
            console.log("materia creada: ", subject);

        }
    
 
    }

    return (
     
     <>
        <form onSubmit={createSubject}>
        <h1>Nueva Materia</h1>
        <label htmlFor="name">Titulo</label>
        <input type="subject" name="subjectName" onChange={handleSubject}/>
        <label htmlFor="description">Descripcion</label>
        <input type="text" name="description" onChange={handleSubject}/>

        <button type='submit'>Nueva Materia +</button>

        </form>
        
        
        </>


    )

}

export default NewSubject;
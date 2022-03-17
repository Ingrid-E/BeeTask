import React, { useState, useEffect  } from 'react';
import './NewItem.css'
import Bee from '../../assets/Images/Bee.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function NewSubject(props){
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

     <div className='newItem newSubject'>
        <form onSubmit={createSubject}>
        <div className='title'>
            <img src={Bee} alt="Bee"></img>
            <h1>Nuevo Curso</h1>
            <img src={Bee} alt="Bee"></img>
        </div>
        <div>
          <h2>Titulo</h2>
        <TextField
            value={subject.subjectName}
            variant="outlined"
            onChange={handleSubject}
            size="small"
            name="subjectName"
            fullWidth
          />
        </div>
        <div>
        <h2>Descripcion</h2>
        <TextField
            value={subject.description}
            variant="outlined"
            onChange={handleSubject}
            size="small"
            name="description"
            fullWidth
          />
          </div>
        <Button type='submit'>Crear Curso</Button>
        <Button onClick={()=>{props.window("closed")}}>Cancelar</Button>
        </form>

        </div>


    )

}

export default NewSubject;
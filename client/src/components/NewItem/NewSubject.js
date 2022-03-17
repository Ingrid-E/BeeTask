import React, { useState, useEffect  } from 'react';
import './NewItem.css'
import Bee from '../../assets/Images/Bee.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NewSection from './NewSection';
function NewSubject(props){
    const userid = props.userid;
    console.log("id del usuario: ",userid);
    const [subject, setSubject] = useState({
        subjectName: '',
        description: '',
        userid: userid,
        status: false,
        id: 0
    });

      useEffect(()=>{

        },[subject])

      const handleSubject = async (e) =>{

        setSubject({...subject, [e.target.name]:e.target.value} )
    };

    const createSubject = async (e)=>{
        e.preventDefault();
        try{
            const res = await fetch("http://localhost:5000/addSubject",{
                method: "POST",
                body: JSON.stringify(subject),
                headers: {"Content-Type": "application/json"}
                });
            const resData = await res.json();
            setSubject({...subject, status: true, id: resData.idsubject})
        }catch(error){
            console.error("Error al crear la materia")
        }
    }

    return (

     <div className='newItem newSubject'>
        <form onSubmit={createSubject} className={subject.status? "subjectForm": ""}>
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
        {subject.status? (<div>
        <NewSection idsubject={subject.id}/>
        <Button className="form_button"onClick={()=>{props.window("closed")}}>Terminar</Button>
        </div>): null}
        </div>


    )

}

export default NewSubject;
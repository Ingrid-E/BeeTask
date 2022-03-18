import React, { useState, useEffect  } from 'react';
import './NewItem.css'
import Bee from '../../assets/Images/Bee.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import NewSection from './NewSection';
function NewSubject(props){
    const userid = props.userid;
    const idsubject = props.idsubject
    const [subject, setSubject] = useState({
      subjectName: '',
      description: '',
      userid: userid,
      status: false,
      id: 0
  });
  console.log(idsubject)
    if(idsubject!== null){
      console.log("Subject already entered")
      subject.id = idsubject
      subject.status = true
    }

    const [error,setError] = useState({name: false, description: false})

      useEffect(()=>{

        },[subject])

      const handleSubject = async (e) =>{

        setSubject({...subject, [e.target.name]:e.target.value} )
    };

    const createSubject = async (e)=>{
      e.preventDefault();
      const emptyName = subject.description.length === 0 || !subject.description.trim()
      const emptyDescription = subject.subjectName.length === 0 || !subject.subjectName.trim()

      if(emptyName || emptyDescription){
        if(emptyName && emptyDescription){
          subject.subjectName = null
          subject.description = null
          setError({name:true, description: true})
        }else if(emptyName){
          subject.subjectName = null
          setError({name: true, description: false})
        }else{
          subject.description = null
          setError({name: false, description: true})
        }
      }else{
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
          <h2>Nombre</h2>
        <TextField
            value={subject.subjectName}
            variant="outlined"
            onChange={handleSubject}
            size="small"
            name="subjectName"
            error = {error.name}
            helperText = {error.name? "Ingresa el Nombre": null}
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
            error = {error.description}
            helperText = {error.description? "Ingresa una descripcion": null}
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
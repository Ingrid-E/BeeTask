import React, { useState, useEffect, useContext  } from 'react';
import SubjectsContext from '../context/Subjects/SubjectsContext';


function NewTask(props){
    const userid = props.userid;
    const subjectsContext = useContext(SubjectsContext);

    const [courseSelected, setCourseSelected] = useState(0);
    const [task, setTask] = useState({
        name: '',
        description: '',
        datetime: '',
        priority: '',
        idSECTION: 0,
    });
    

    const [dateTime, setDateTime] = useState({
        day: 0,
        month: 0,
        year: 0,
        hours: 0,
        minutes: 0, 
        am_pm: ''
    });


      useEffect(()=>{

    },[task, dateTime])

      const handleTask = async (e) =>{
          console.log("noseeeeeeee");
        console.log("namein: ", e.target.name, "idsectionn: ", e.target.value)
        setTask({...task, [e.target.name]:e.target.value} )
    };

    const handleDate = async(e) => {
        
        setDateTime({...dateTime, [e.target.name]:e.target.value});

    };
//EL RANGO DE HORAS QUE PUEDE ELEGIR EL USUARIO VA DE 1 A 12. 
    const HoursConverter12FormatTo24Format = (hour12Format, aMinute, amOrPm) =>{
        let hour24Format = 0;
        if(amOrPm == 'AM'){
            if(hour12Format == 12){
                hour24Format = 0;
            }else{
                hour24Format = hour12Format;
            }
        }

        if(amOrPm=== 'PM'){
            if(hour12Format == 12){

                hour24Format = hour12Format;
            }else{
                hour24Format = parseInt(hour12Format) +12;

            }
        }

        return hour24Format+':'+aMinute;
    }

    //Aqui se buscara que la fecha concuerde con el formato de postgres, la hora ahi es de 00:00 hasta 23:59. 
    const HoursConverter24FormatTo12Format = (hour24Format, aMinute) =>{
        let hour12Format = 0;
        let amOrPm = '';
        if(hour24Format < 12){
            amOrPm = 'AM';
            if(hour24Format == 0){
                hour12Format = 12;
            }else{
                hour12Format = hour24Format;
            }
        }

        if(hour24Format >= 12){
            amOrPm = 'PM';
            if(hour24Format == 12){
                hour12Format = 12;
            }else{
                hour12Format = parseInt(hour24Format)-12;
            }
        }

        return hour12Format+':'+aMinute+''+amOrPm;
    }

    const createTask = async (e)=>{
        e.preventDefault();

        const taskSnapshot = {...task, datetime: dateTime.year+"/"+dateTime.month+"/"+dateTime.day+" "+HoursConverter12FormatTo24Format(dateTime.hours, dateTime.minutes, dateTime.am_pm)}
        setTask(taskSnapshot);
        console.log("mi post es: ",taskSnapshot);
            const res = await fetch("http://localhost:5000/addTask",{
            method: "POST",
            body: JSON.stringify(taskSnapshot),
            headers: {"Content-Type": "application/json"}
        });
        const resData = await res.json();
        console.log(resData);
        if(!res.ok){ 
            console.log("hubo un error al crear la tarea")
        }else{
            
            console.log("tarea creada: ", task);

        }
    
 
    }

    const handleCourseSelect = (e) =>{
        console.log("testing: ", e.target.value);
        setCourseSelected(e.target.value);
        subjectsContext.getSubjects(userid);
    }

   


    const handleSectionSelect = (e) =>{
        console.log("testingvalue: ", e.target.value);
        console.log("testingname: ", e.target.name);
        subjectsContext.getSections(courseSelected);
        setTask({...task, [e.target.name]:e.target.value} )

    }
    const prints = (e) =>{
        console.log("it prints");
    }
    return (
     
     <>
        <form onSubmit={createTask}>
        <h1>Nueva Tarea</h1>
        <label htmlFor="name">Titulo</label>
        <input type="task" name="name" onChange={handleTask}/>
        <label htmlFor="description">Descripcion</label>
        <input type="text" name="description" onChange={handleTask}/>

        <h3>Fecha</h3>
        <label htmlFor="day">Dia</label>
        <input type="text" name="day" onChange={handleDate}/>
        <label htmlFor="month">Mes</label>
        <input type="text" name="month" onChange={handleDate}/>
        <label htmlFor="year">Año</label>
        <input type="text" name="year" onChange={handleDate}/>
        <h3>Hora</h3>
        <label htmlFor="hours">Horas</label>
        <input type="hours" name="hours" onChange={handleDate}/>
        <label htmlFor="minutes">Minutos</label>
        <input type="minutes" name="minutes" onChange={handleDate}/>
        <label htmlFor="am_pm">AM/PM</label>
        <input type="text" name="am_pm" onChange={handleDate}/>

        <h3>Curso</h3>
        <select onChange={handleTask} onClick={handleCourseSelect} name="subject">
        {subjectsContext.subjects.map((aSubject)=>(
            <option value={aSubject.idsubject}>
                {aSubject.subjectname}
            </option>
        )
        )}
        </select>
        <h3>Sección</h3>
        <select defaultChecked="0" onClick={handleSectionSelect} name="idSECTION" onChange={handleTask}>
        {subjectsContext.sections.map((aSection)=>(
            <option  value={aSection.idsection}>
                {aSection.sectionname}
            </option>
        )
        )

        }
        </select>
        <h3>Prioridad</h3>
        <label>Normal</label>
        <input type="Radio" name = "priority" value="Normal" onChange={handleTask}/>
        <label>Importante</label>
        <input type="Radio" name = "priority" value="Importante" onChange={handleTask}/>
        <label>Urgente</label>
        <input type="Radio" name = "priority" value="Urgente" onChange={handleTask}/>

        <button type='submit'>Nueva Tarea +</button>
        </form>
        
        
        </>


    )

}

export default NewTask;
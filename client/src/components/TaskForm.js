import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";

function TaskForm(props){
    const params = useParams();
    const idtask = params.taskid;

    let [task, setTask] = useState({
        name: '',
        description: '',
        datetime:'',
        grade: 0, 
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
        getTasks(idtask);    
    },[])

        const getTasks = async (id) =>{
            //cursos
            const gettingtasks = await fetch("http://localhost:5000/seeTask/"+id);
            const datatasks = await gettingtasks.json();
            setTask(datatasks);
            console.log(Object.values(datatasks)[0]);
            
            //console.log(datatasks);
        }
        

    const handleTask = async (e) =>{
          setTask({...task, [e.target.name]:e.target.value} )
      };

      const handleDate = async(e) => {
        
        setDateTime({...dateTime, [e.target.name]:e.target.value});

    };

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

    const editTask = async (e)=>{ 
        e.preventDefault(); 
        const taskSnapshot = {...task, datetime: dateTime.year+"/"+dateTime.month+"/"+dateTime.day+" "+HoursConverter12FormatTo24Format(dateTime.hours, dateTime.minutes, dateTime.am_pm)}
        setTask(taskSnapshot);
        const response = await fetch("http://localhost:5000/editTheTask/"+idtask,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskSnapshot),
        });
        const data = await response.json();
        console.log(data);
    }

    
  
    
    return (
     
        <>
        <form onSubmit={editTask}>
        <h1>Actualizar Tarea</h1>
                <label htmlFor="name">Titulo</label>
                <input type="text" name="name" onChange={handleTask}/><br></br>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" onChange={handleTask}/><br></br>
                <label htmlFor="grade">Nota</label>
                <input type="number" name="grade" min="0.00" max="5.00" step="0.01" onChange={handleTask}/><br></br>
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
        
        <button type='submit'>Actualizar Tarea +</button>
        </form>
        
        
        </>


    )

}

export default TaskForm;
    /*const createsection = async (e)=>{
        e.preventDefault();

            const res = await fetch("http://localhost:5000/editTask",{
            method: "PUT",
            body: JSON.stringify(section),
            headers: {"Content-Type": "application/json"}
        });
        const resData = await res.json();
        console.log(resData);
        if(!res.ok){ 
            console.log("hubo un error al crear la seccion")
        }else{
            
            console.log("seccion: ", section);

        }
        
           <h3>Prioridad</h3>
        <label>Normal</label>
        <input type="Radio" name = "priority" value="Normal" onChange={handleTask}/>
        <label>Importante</label>
        <input type="Radio" name = "priority" value="Importante" onChange={handleTask}/>
        <label>Urgente</label>
        <input type="Radio" name = "priority" value="Urgente" onChange={handleTask}/>


                {
            task.map((aTask)=>(
                <>
                <label htmlFor="name">Titulo</label>
                <input type="text" name="name" onChange={handleTask}/><br></br>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" onChange={handleTask}/><br></br>
                <label htmlFor="grade">Nota</label>
                <input type="number" name="grade" step="0.01" onChange={handleTask}/><br></br>
                </>
            )
            )
            
        }
        */
    
 
    

   


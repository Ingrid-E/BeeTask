import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";

function TaskForm(){
    const navigate = useNavigate(); 
    const params = useParams();
    const idtask = params.taskid;
    const idSUBJECT = params.idSUBJECT;
    const userid = params.userid;

    const [task, setTask] = useState({
        name: '',
        description: '',
        datetime:'',
        grade: '', 
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
        getTask(idtask);    
    },[])
        let myDate;
        let my12FormatHour;
        const getTask = async (id) =>{
            const gettingtask = await fetch("http://localhost:5000/seeTask/"+id);
            const datatask = await gettingtask.json();

            myDate = new Date(datatask.datetime);
            my12FormatHour = HoursConverter24FormatTo12Format(myDate.getHours(), myDate.getMinutes())
            setTask(datatask);
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
        navigate(`/sections/${userid}/${idSUBJECT}`);

    }


    const HoursConverter24FormatTo12Format = (hour24Format, aMinute) =>{

        let hour12Format = {
            amOrPm: '',
            hour: '',
            minutes: ''
        };
        if(hour24Format < 12){
            hour12Format.amOrPm = 'AM';
            if(hour24Format == 0){
               hour12Format.hour = 12;
            }else{
                hour12Format.hour = hour24Format;
            }
        }

        if(hour24Format >= 12){
            hour12Format.amOrPm = 'PM';
            if(hour24Format == 12){
                hour12Format.hour = 12;
            }else{
                hour12Format.hour = parseInt(hour24Format)-12;
            }
        }
        hour12Format.minutes = aMinute;
        return hour12Format;
    }
    
    
    return (
     
        <>
        <form onSubmit={editTask}>
        <h1>Actualizar Tarea</h1>
        {console.log("cuak",myDate)}
                <label htmlFor="name">Titulo</label>
                <input type="text" name="name" defaultValue={task.name} onChange={handleTask}/><br></br>
                <label htmlFor="description">Descripcion</label>
                <input type="text" name="description" defaultValue={task.description} onChange={handleTask}/><br></br>
                <label htmlFor="grade">Nota</label>
                <input type="number" name="grade" defaultValue={task.grade} min="0.00" max="5.00" step="0.01" onChange={handleTask}/><br></br>
                <h3>Fecha</h3>
                <label htmlFor="day">Dia</label>
                <input type="text" name="day"  onChange={handleDate}/>
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
 
    

   


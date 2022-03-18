import React, { useState, useEffect, useContext } from 'react';
import './NewItem.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


function NewTask(props) {
    const userid = props.userid;
    const idsubject = props.idsubject;

    const [sections, setSections] = useState([]);

    const getSections = async () => {
        try {
            const gettingsubjects = await fetch("http://localhost:5000/seeSections/" + idsubject);
            setSections(await gettingsubjects.json());
        } catch (error) {
            console.error(error)
        }
    }

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


    useEffect(() => {
        getSections();
    }, [task, dateTime])

    const handleTask = async (e) => {
        setTask({ ...task, [e.target.name]: e.target.value })
    };

    const handleDate = async (e) => {

        setDateTime({ ...dateTime, [e.target.name]: e.target.value });

    };
    //EL RANGO DE HORAS QUE PUEDE ELEGIR EL USUARIO VA DE 1 A 12. 
    const HoursConverter12FormatTo24Format = (hour12Format, aMinute, amOrPm) => {
        let hour24Format = 0;
        if (amOrPm == 'AM') {
            if (hour12Format == 12) {
                hour24Format = 0;
            } else {
                hour24Format = hour12Format;
            }
        }

        if (amOrPm === 'PM') {
            if (hour12Format == 12) {

                hour24Format = hour12Format;
            } else {
                hour24Format = parseInt(hour12Format) + 12;

            }
        }

        return hour24Format + ':' + aMinute;
    }

    //Aqui se buscara que la fecha concuerde con el formato de postgres, la hora ahi es de 00:00 hasta 23:59. 
    const HoursConverter24FormatTo12Format = (hour24Format, aMinute) => {
        let hour12Format = 0;
        let amOrPm = '';
        if (hour24Format < 12) {
            amOrPm = 'AM';
            if (hour24Format == 0) {
                hour12Format = 12;
            } else {
                hour12Format = hour24Format;
            }
        }

        if (hour24Format >= 12) {
            amOrPm = 'PM';
            if (hour24Format == 12) {
                hour12Format = 12;
            } else {
                hour12Format = parseInt(hour24Format) - 12;
            }
        }

        return hour12Format + ':' + aMinute + '' + amOrPm;
    }

    const createTask = async (e) => {
        e.preventDefault();

        const taskSnapshot = { ...task, datetime: dateTime.year + "/" + dateTime.month + "/" + dateTime.day + " " + HoursConverter12FormatTo24Format(dateTime.hours, dateTime.minutes, dateTime.am_pm) }
        setTask(taskSnapshot);
        console.log("mi post es: ", taskSnapshot);
        const res = await fetch("http://localhost:5000/addTask", {
            method: "POST",
            body: JSON.stringify(taskSnapshot),
            headers: { "Content-Type": "application/json" }
        });
        const resData = await res.json();
        console.log(resData);
        if (!res.ok) {
            console.log("hubo un error al crear la tarea")
        } else {
            props.window("closed");
            console.log("tarea creada: ", task);

        }
    }


    const handleSectionSelect = (e) => {
        console.log("testingvalue: ", e.target.value);
        console.log("testingname: ", e.target.name);
        setTask({ ...task, [e.target.name]: e.target.value })

    }

    return (

        <div className='newItem newTask'>
            <form onSubmit={createTask}>
                <h1>Nueva Tarea</h1>
                <div>
                    <h2>Nombre</h2>
                    <TextField
                        value={task.name}
                        variant="outlined"
                        onChange={handleTask}
                        size="small"
                        name="name"
                        fullWidth
                    />
                </div>
                <div>
                    <h2>Descripcion</h2>
                    <TextField
                        value={task.description}
                        variant="outlined"
                        onChange={handleTask}
                        size="small"
                        name="description"
                        fullWidth
                    />
                </div>
                <div className="date_input">
                    <div>
                        <h2>Dia</h2>
                        <TextField
                            value={dateTime.day}
                            variant="outlined"
                            onChange={handleDate}
                            size="small"
                            name="day"
                            fullWidth
                        />
                    </div>
                    <div>
                    <h2>Mes</h2>
                        <TextField
                            value={dateTime.month}
                            variant="outlined"
                            onChange={handleDate}
                            size="small"
                            name="month"
                            fullWidth
                        />
                    </div>
                    <div>
                    <h2>Año</h2>
                        <TextField
                            value={dateTime.year}
                            variant="outlined"
                            onChange={handleDate}
                            size="small"
                            name="year"
                            fullWidth
                        />
                    </div>
                </div>
                <div className="hour_input">
                    <div>
                        <h2>Hora</h2>
                            <TextField
                                value={dateTime.hours}
                                variant="outlined"
                                onChange={handleDate}
                                size="small"
                                name="hours"
                                fullWidth
                            />
                    </div>
                    <div>
                        <h2>Minutos</h2>
                            <TextField
                                value={dateTime.minutes}
                                variant="outlined"
                                onChange={handleDate}
                                size="small"
                                name="minutes"
                                fullWidth
                            />
                    </div>
                    <div>
                        <h2>AM/PM</h2>
                            <TextField
                                value={dateTime.am_pm}
                                variant="outlined"
                                onChange={handleDate}
                                size="small"
                                name="am_pm"
                                fullWidth
                            />
                    </div>
                </div>
                <div className="select_subject">
                <h2>Sección</h2>
                <select defaultChecked="0" onClick={handleSectionSelect} name="idSECTION" onChange={handleTask}>
                    {sections.map((aSection) => (
                        <option value={aSection.idsection}>
                            {aSection.sectionname}
                        </option>
                    )
                    )

                    }
                </select>
                </div>
                <div className="select_priority">
                    <h2>Prioridad</h2>
                    <label>Normal</label>
                    <input type="Radio" name="priority" value="Normal" onChange={handleTask} />
                    <label>Importante</label>
                    <input type="Radio" name="priority" value="Importante" onChange={handleTask} />
                    <label>Urgente</label>
                    <input type="Radio" name="priority" value="Urgente" onChange={handleTask} />
                </div>
                <Button type='submit'>Nueva Tarea</Button>
                <Button type="button" onClick={()=>{props.window("closed")}}>Cancelar</Button>
            </form>
        </div>


    )

}

export default NewTask;
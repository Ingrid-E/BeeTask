import React, { useState, useEffect } from 'react';
import './NewItem.css'
import Bee from '../../assets/Images/Bee.png'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

function NewSection(props) {

    const idsubject = props.idSUBJECT;

    const [section, setsection] = useState({
        sectionName: '',
        gradePercentage: 0,
        idSUBJECT: idsubject,
    });

    useEffect(() => {

    }, [section])

    const handlesection = async (e) => {

        setsection({ ...section, [e.target.name]: e.target.value })
    };

    const createsection = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/addsection", {
            method: "POST",
            body: JSON.stringify(section),
            headers: { "Content-Type": "application/json" }
        });
        const resData = await res.json();
        console.log(resData);
        if (!res.ok) {
            console.log("hubo un error al crear la seccion")
        } else {
            console.log("seccion: ", section);
        }
    }

    return (
        <div className='newItem newSection'>
            <div className='title'>
                <img src={Bee} alt="Bee"></img>
                <h1>Agregar Secciones</h1>
                <img src={Bee} alt="Bee"></img>
            </div>
            <form onSubmit={createsection}>
                <div className='addSection'>
                <div>
                    <h2>Titulo</h2>
                    <TextField
                        value={section.sectionName}
                        variant="outlined"
                        onChange={handlesection}
                        size="small"
                        name="sectionName"
                        className='nameField'
                    />
                </div>
                <div>
                    <h2>%</h2>
                    <TextField
                        value={section.gradePercentage}
                        variant="outlined"
                        onChange={handlesection}
                        size="small"
                        name="gradePercentage"
                        type="number"
                        className='percantageField'
                    />
                </div>
                </div>
                <Button type='submit'>Nueva seccion</Button>

            </form>

        </div>


    )

}

export default NewSection;
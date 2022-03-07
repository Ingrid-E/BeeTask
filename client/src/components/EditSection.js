import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";
function EditSection(){
   
    const params = useParams();
    const idsection = params.sectionId;

    let [section, setSection] = useState({
        sectionname: "",
        gradepercentage: 0,
    });

    useEffect(()=>{
        getSection(idsection);    
    },[])

        const getSection = async (id) =>{
            //cursos
            const gettingtasks = await fetch("http://localhost:5000/seeSections/"+id);
            const datatasks = await gettingtasks.json();
            setSection(datatasks);
            console.log(Object.values(datatasks)[0]);
        }
        

    const handleSection = async (e) =>{
          setSection({...section, [e.target.name]:e.target.value} )
      };

    const upSection = async (e)=>{ 
        e.preventDefault();
        const response = await fetch("http://localhost:5000/editSection/"+idsection,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(section),
        });
        const data = await response.json();
        console.log(data);
    }

    
  

    return (
     
        <>
        <form onSubmit={upSection}>
        <h1>Actualizar Tarea</h1>

                <label htmlFor="name">Titulo</label>
                <input type="text" name="sectionname" onChange={handleSection}/><br></br>
                <label htmlFor="grade">Porcentaje</label>
                <input type="number" name="gradepercentage" min="1" max="100" onChange={handleSection}/><br></br>
           
        
        <button type='submit'>Actualizar Tarea +</button>
        </form>
        
        
        </>


    )

}

export default EditSection;
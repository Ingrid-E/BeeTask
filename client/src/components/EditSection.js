import React, { useState, useEffect  } from 'react';
import {useNavigate, useParams} from "react-router-dom";
function EditSection(){
    const navigate = useNavigate();
    const params = useParams();
    const idsection = params.sectionId;
    console.log("a",idsection)
    const userid = params.userid;
    const idSUBJECT = params.idSUBJECT;
    const [section, setSection] = useState({
        sectionname: '',
        gradepercentage: '',
    });

    useEffect(()=>{
        getSection(idsection);    
    },[])

        const getSection = async (id) =>{
            //cursos

            const gettingtasks = await fetch("http://localhost:5000/seeSection/"+id);
            const datatasks = await gettingtasks.json();
            setSection(datatasks);
            console.log(datatasks);
            console.log(Object.values(datatasks)[0]);
        }
        

    const handleSection = async (e) =>{
          setSection({...section, [e.target.name]:e.target.value} )
      };

    const upSection = async (e)=>{ 
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/editSection/"+idsection,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(section),
            });
            const data = await response.json();
            console.log(data);
            navigate(`/sections/${userid}/${idSUBJECT}`)
        } catch (error) {
            console.log(error)
        }
    }

    
  

    return (
     
        <>
        <form onSubmit={upSection}>
        <h1>Actualizar Seccion</h1>
                <label htmlFor="sectionname">Titulo</label>
                <input type="text" name="sectionname" defaultValue={section.sectionname} onChange={handleSection}/><br></br>
                <label htmlFor="gradepercentage">Porcentaje</label>
                <input type="number" name="gradepercentage" min="1" max="100" defaultValue={section.gradepercentage}  onChange={handleSection}/><br></br>
           
        
        <button type='submit'>Actualizar</button>
        </form>
        
        
        </>


    )

}

export default EditSection;
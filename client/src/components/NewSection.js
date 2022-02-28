import React, { useState, useEffect  } from 'react';

function NewSection(props){

    const idsubject = props.idSUBJECT;
    
    const [section, setsection] = useState({
        sectionName: '',
        gradePercentage: 0,
        idSUBJECT: idsubject,
    });
    
      useEffect(()=>{
      
        },[section])

      const handlesection = async (e) =>{
          
        setsection({...section, [e.target.name]:e.target.value} )
    };

    const createsection = async (e)=>{
        e.preventDefault();

            const res = await fetch("http://localhost:5000/addsection",{
            method: "POST",
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
    
 
    }

    return (
     
     <>
        <form onSubmit={createsection}>
        <label htmlFor="name">Titulo</label>
        <input type="section" name="sectionName" onChange={handlesection}/>
        <label htmlFor="gradePercentage"> Porcentaje en la nota</label>
        <input type="text" name="gradePercentage" onChange={handlesection}/>

        <button type='submit'>Nueva seccion +</button>

        </form>
        
        
        </>


    )

}

export default NewSection;
import React, { useState, useEffect  } from 'react';
import { useNavigate, useParams } from "react-router-dom";


function Ponderado(){
    let [ponderado, setPonderado] = useState(0);
    const params = useParams();
    
    /*useEffect(()=>{
    
      
    },[ponderado])*/

    const loadTask = async () => {
        let subm = document.getElementById("subject").value;
        let newsubm = parseInt(subm,10);
        let res = await fetch("http://localhost:5000/finalGrade/" + newsubm);
        let data = await res.json();
        setPonderado(data);
      };


    useEffect(() => {
      }, [ponderado]);

      const handleChange = async (e) =>{
        setPonderado({...ponderado, [e.target.name]:e.target.value} )
    };
    


    /*const handleSubmit = async (e)=>{
        e.preventDefault();
            await fetch("http://localhost:5000/finalGrade/"+ params.id,{
            method: "GET",
            body: JSON.stringify(ponderado),
            headers: {"Content-Type": "application/json"}
        }); 
 
    }

    
    const handleChange = async (e) =>{
        setPonderado({...ponderado, [e.target.name]:e.target.value} )
    };*/
    
    /*const vlinput = () => {
        let subm = document.getElementById("subject").value;
        let newsubm = parseInt(subm,10);
        console.log(newsubm);
    } */
    return (
        <>
        <h1>Calculadora</h1> 
        <form>
        <label htmlFor="text">Id Materia</label>
        <input type="text" name="idsubj" id="subject"/>
        <button type='button' onClick={loadTask} onChange={handleChange}>Ver</button>
        <h3>Grade: {ponderado}</h3>
        </form>
        
        </>
    
    
    )
}

export default Ponderado;
import React, { useState, useEffect  } from 'react';


function Pomodoro(){

    const[minutes, setMinutes] = useState(3);
    const[seconds, setSeconds] = useState(59);
    const[time, setTime] = useState(0); //par: pomodoro, impar: break
    const[run, setRun] = useState(false); 
    const[section, setSection] = useState("Pomodoro!");

    var runTime;

    useEffect(()=>{
        
        if(minutes>=0 && seconds>=0 && run==true){
            runTime = setInterval(()=>{
                setSeconds(seconds-1);

                if(seconds==0){
                    if(minutes!=0){
                        setMinutes(minutes-1);
                        setSeconds(59);
                    }else{
                        if(time%2==0){
                            setMinutes(1);
                            setSeconds(59);
                            setRun(false);
                            setTime(time+1);
                            setSection("Tiempo de descanso!");
                            console.log("Break time");
                        }else{
                            setMinutes(3);
                            setSeconds(59);
                            setRun(false); 
                            setTime(time+1);
                            setSection("Pomodoro!");
                            console.log("Pomodoro time");
                        }

                    }
                }
            },100)
        }

        return () => clearInterval(runTime);

    })

    const refreshPomodoro = () =>{
        
        if(time%2==0){
            setMinutes(3);
            setSeconds(59);
            setRun(false);
        }else{
            setMinutes(1);
            setSeconds(59);
            setRun(false);
        }
        



    }

    
    
    return (
     
        <>  
        <h1>{section}</h1>
        <h2>Minutos: {minutes} | Segundos: {seconds}</h2>
        <input type="button" value="Empezar" onClick={() => setRun(true)}></input>
        <input type="button" value="Pausar" onClick={() => setRun(false)}></input>
        <input type="button" value="Reiniciar" onClick={refreshPomodoro}></input>
        </>


    )

}

export default Pomodoro;
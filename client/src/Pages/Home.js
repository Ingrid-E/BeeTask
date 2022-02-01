import React from "react";
import {get} from '../hooks/Hooks'
function Home(){
    apiTEST();
    async function apiTEST() {
        try {
          const response =await get(`/users/`)
          console.log(response)
        } catch (error) {
          console.error("Not working");
        }
      }
    return (
        <div className="Home">
            <h1>HOLA GEYS</h1>
        </div>
    )
}

export default Home;
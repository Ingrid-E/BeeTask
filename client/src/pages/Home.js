import React, {useEffect} from "react";
import NavBar from "../components/NavBar";
import {get} from '../hooks/Hooks'

function Home(){
    useEffect(() => {
        apiTEST();
      }, [])

    async function apiTEST() {
        try {
          const response =await get(`test`)
          console.log(response)
        } catch (error) {
          console.error("Not working");
        }
      }
    return (
        <div className="Home">
            <NavBar/>
        </div>
    )
}

export default Home;
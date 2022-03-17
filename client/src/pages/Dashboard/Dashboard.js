import {React, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import HomeDash from "../../components/HomeDash/HomeDash";
import MenuNav from "../../components/Menu_Nav/MenuNav";
import Courses from "../../components/Courses/Courses";

function Dashboard() {
    const {userid} = useLocation().state;
    const [section, setSection] = useState("Home")
    let reload = false;
    const handleChange = (value) => {
        setSection(value)
    };

    const reloadPage = ()=>{
        setSection(section)
    };

    useEffect(() => {
    }, [section])

    return (
        <div className="dashboard">
            <MenuNav
            nav = {handleChange}
            onClick = {reloadPage}
            />
            <div className="dashboard__content">
                {section === "Home"? (
                    <HomeDash userid={userid}/>
                ):(section === "Courses"? (
                    <Courses userid={userid}/>
                ): (
                    <div>
                        <h1>Calculadora</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
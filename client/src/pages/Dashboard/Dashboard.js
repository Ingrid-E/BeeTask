import {React, useState} from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import HomeDash from "../../components/HomeDash/HomeDash";
import MenuNav from "../../components/Menu_Nav/MenuNav";
import Courses from "../../components/Courses/Courses";

function Dashboard() {
    const {userid} = useLocation().state;
    const [section, setSection] = useState("Home")
    const handleChange = (value) => {
        setSection(value)
    };

    return (
        <div className="dashboard">
            <MenuNav
            nav = {handleChange}
            />
            <div className="dashboard__content">
                {section === "Home"? (
                    <HomeDash/>
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
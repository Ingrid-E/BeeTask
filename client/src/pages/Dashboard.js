import React from "react";
import { useLocation } from "react-router-dom"
import "./pages.css";
import "./Dashboard.css";
import MenuNav from "../components/Menu_Nav/MenuNav"

function Dashboard() {
    const {userid} = useLocation().state;
    return (
        <div className="dashboard">
            <MenuNav name = {"Ingrid"}/>
        </div>
    );
}

export default Dashboard;
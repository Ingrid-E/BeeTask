import React from 'react';
import NewTask from './NewTask';
import NewSubject from './NewSubject';
import { useLocation } from "react-router-dom"
import SeeSubjects from './SeeSubjects';
import SubjectsState from '../context/Subjects/SubjectsState';
function Menu() {
    console.log("paso por aqui");
    const {userid} = useLocation().state;
    console.log("paso por aqui");

    return (
        <>
            <h1>Menu</h1>
            <SubjectsState>
                <NewTask userid={userid} />
                <SeeSubjects userid={userid} />
            </SubjectsState>
            <NewSubject userid={userid} />
        </>


    )

}

export default Menu;
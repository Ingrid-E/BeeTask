import React from 'react';
import NewTask from './NewTask';
import NewSubject from './NewSubject';
import {useNavigate, useParams} from "react-router-dom"
import SeeSubjects from './SeeSubjects';
import NewSection from './NewSection';

function Menu(){
    const params = useParams();
    const userid = params.userid;

    return (
     
     <>
     <h1>Menu</h1>

<NewTask></NewTask>
<SeeSubjects userid={userid}></SeeSubjects>
<NewSubject userid={userid}></NewSubject>
        
        
        </>


    )

}

export default Menu;
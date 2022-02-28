import React from 'react';
import NewTask from './NewTask';
import NewSubject from './NewSubject';
import {useNavigate, useParams} from "react-router-dom"
import SeeSubjects from './SeeSubjects';
import NewSection from './NewSection';
import SubjectsState from '../context/Subjects/SubjectsState';
function Menu(){
    const params = useParams();
    const userid = params.userid;

    return (
     
     <>
     <h1>Menu</h1>
<SubjectsState>
<NewTask userid={userid}/>
<SeeSubjects userid={userid}/>
</SubjectsState>

<NewSubject userid={userid}/>
        
        
        </>


    )

}

export default Menu;
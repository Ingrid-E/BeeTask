import React, { useReducer } from "react";
import SubjectsContext from "./SubjectsContext";
import SubjectsReducer from "./SubjectsReducer";

import { GET_SUBJECTS, GET_SECTIONS } from "../types";

const SubjectsState = (props) => {
    const initialState = {
        subjects: [],
        sections: [],
    };

    const [state, dispatch] = useReducer(SubjectsReducer, initialState);

    const getSubjects = async (id) =>{
        //cursos
        try{
            const gettingsubjects = await fetch("http://localhost:5000/seeSubjects/"+id);
            const dataSubjects = await gettingsubjects.json();
            dispatch({type: GET_SUBJECTS, payload: dataSubjects});       
        }catch(error){
            console.log(error);
        }
        
    };

    const getSections = async (id) =>{
        //Secciones
        try {
            console.log("paso por context");
            const gettingSections = await fetch("http://localhost:5000/seeSections/"+id);
            const dataSections = await gettingSections.json();
            console.log("paquete: ",dataSections);
            dispatch({type: GET_SECTIONS, payload: dataSections});       
        } catch (error) {
            console.log(error);
        }

        
    }

       return (

        <SubjectsContext.Provider
        value={{
            subjects: state.subjects,
            sections: state.sections,
            getSections,
            getSubjects,
        }}
        >
          {props.children}
        </SubjectsContext.Provider>

       );

};

export default SubjectsState;
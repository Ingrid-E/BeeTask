import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Sections from "./components/Sections";
import SubjectsState from "./context/Subjects/SubjectsState"
import TaskForm from "./components/TaskForm";
import EditSection from "./components/EditSection";
import TaskDetails from "./components/TaskDetails";

function App(){

    return(
      <div className="App">
      <Router>
        <Routes>
          <Route path='/Home'element={<Home/>} />
          <Route path='/register'element={<Register/>} />
          <Route path='/login'element={<Login/>} />
          <Route path='/menu'element={<Dashboard/>} />
          <Route path='/task/:userid/:idSUBJECT/:taskid'element={<TaskForm/>} />
          <Route path='/section/:userid/:idSUBJECT/:sectionId'element={<EditSection/>} />
          <Route path='/sections/:userid/:idSUBJECT' element={<SubjectsState>
            <Sections/>
            </SubjectsState>} />
          <Route path='/taskDetails/:userid/:idSUBJECT/:taskid' element={<TaskDetails/>}/>
        </Routes>
      </Router>
      </div>
    )

}

export default App;
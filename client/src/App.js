import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Sections from "./components/Sections";
function App(){

    return(
      <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>} />
          <Route path='/register'element={<Register/>} />
          <Route path='/login'element={<Login/>} />
          <Route path='/menu/:userid'element={<Menu/>} />
          <Route path='/sections/:userid/:idSUBJECT' element={<Sections/>} />

        </Routes>
      </Router>
      </div>
    )

}

export default App;
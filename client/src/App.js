import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./test/Home";
function App(){

    return(
      <div className="App">
      <Router>
        <Routes>
          <Route path='/'element={<Home/>} />
        </Routes>
      </Router>
      </div>
    )

}

export default App;
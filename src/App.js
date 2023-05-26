import React from "react"
import './App.css';
import { Routes, Route} from "react-router-dom"
import NevBar from './Components/Nevbar/NevBar';
import About from "./Components/About";
import Home from "./Components/Home/Home";
// import Translater from "./Components/Translater/Translater";
import Dictionary from "./Components/Dictionary/Dictionary";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NevBar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/* <Route path="/trasnlate" element={<Translater/>}/> */}
        <Route path="/dictionary" element={<Dictionary/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Home from "../src/Pages/Home"
import { Routes, Route } from "react-router-dom";
import Orcamento from "./components/Orcamento/Orcamento";


function App() {

  return ( 
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/Orcamento" element={<Orcamento />}/>    
    </Routes>
  )
}

export default App;

import React, { useState } from "react";
import './App.css';
import { Login } from './login';
import { Register } from './register';
import HomeScreen from "./homescreen";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Login />} />
        <Route  path="/homescreen" element={<HomeScreen />} />
        <Route path = "register" element = {<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
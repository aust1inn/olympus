import React, { useState } from "react";
// import { View, Text, TextInput } from "react-native";
import { Tags, TagDropdown} from "./tag";

// import { Tags } from "./Tags";


import './App.css';
import { Login } from './login';
import { Register } from './register';

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> 
      }
    </div>
  );
}

export default App;


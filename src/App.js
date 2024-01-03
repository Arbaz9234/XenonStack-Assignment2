import React, { useState } from "react";
import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import {Home} from "./home";
import {Contactus} from "./contactus";
import {Comment} from "./Comment"
function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : currentForm === "loggedin"? <Home onFormSwitch={toggleForm} /> :
        currentForm === "Contact"? <Contactus onFormSwitch={toggleForm} />:
        currentForm === "CommentAdded"? <Comment onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }      
    </div>
  );
}

export default App;

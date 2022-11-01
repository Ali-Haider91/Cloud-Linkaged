import "./App.css";
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
import  Login from './component/Login/login'
import Student from './pages/student'
import Teacher from './pages/teacher'
import Recruiter from './pages/recruiter'
import Signup from "./pages/Signup/signup";

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/student" element={<Student/>}/>
          <Route path="teacher/" element={<Teacher/>}/>
          <Route path="/recruiter" element={<Recruiter/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

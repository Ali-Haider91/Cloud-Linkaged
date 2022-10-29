import "./App.css";
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
import  Home from './pages/Home';
import Student from './pages/login/student'
import Teacher from './pages/login/teacher'
import Recruiter from './pages/login/recruiter'
import Signup from "./pages/signup/signup";

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
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

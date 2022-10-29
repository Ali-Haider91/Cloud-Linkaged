import "./App.css";
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
// import { Home } from './pages/Home/home';
import Login from './pages/login/login'
import Signup from "./pages/signup/signup";

function App() {
  return (
    <div>
      <Signup/>
      {/* <Login/> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login/>}/> */}
          {/* <Route path="/" element={<Signup/>}/> */}
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

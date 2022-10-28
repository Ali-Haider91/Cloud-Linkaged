import "./App.css";
import React from 'react';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import './App.css';
// import { Home } from './pages/Home/home';
import Login from './pages/login/login'

function App() {
  return (
    <div>
      <Login/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;

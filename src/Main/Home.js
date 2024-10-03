import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './style.css'; // Importing the CSS
import SignUp from './SignUp';
import Login from './Login';

function HomeNavbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-plus">+</span>
          <span className="logo-text">SOUL MEDIC</span>
        </div>
        <div className="nav-links">
          <Link to="/SignUp" className="nav-link">SignUp</Link>
          <Link to="/Login" className="nav-link">Login</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/SignUp' element={<SignUp/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}


export default function Home() {
  return (
    <div>
      <HomeNavbar /> 
      <br/><br/>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
}

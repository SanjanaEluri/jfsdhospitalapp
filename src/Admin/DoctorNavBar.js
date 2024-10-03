import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
 // Importing the CSS
import './adminstyle.css'

import AddDoctors from './AddDoctors';
import ViewDoctors from './ViewDoctors';
function DoctorNavbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <span className="logo-plus">+</span>
          <span className="logo-text">SOUL MEDIC</span>
        </div>
        <div className="nav-links">
          <Link to="/adddoctors" className="nav-link">AddDoctors</Link>
          <Link to="/viewdoctors" className="nav-link">ViewDoctors</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/adddoctors' element={<AddDoctors/>}></Route>
        <Route path='/viewdoctors' element={<ViewDoctors/>}></Route>
      </Routes>
    </div>
  );
}


export default function DoctorNavBar() {
  return (
    <div>
     <DoctorNavbar/>
      <br/><br/>
      <h2>Welcome to the Admin Page</h2>
    </div>
  );
}

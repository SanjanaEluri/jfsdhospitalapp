import React from 'react';
import './viewdoctors.css'; // Import the CSS file
import { Link,Route,Routes} from 'react-router-dom'; 
import DoctorNavBar from './DoctorNavBar';
export default function ViewDoctors({ doctors }) {
  return (
    <div>
       <nav className="navbar">
        <div className="logo">
          <span className="logo-plus">+</span>
          <span className="logo-text">SOUL MEDIC</span>
        </div>
        <div className="nav-links">
          
          
          <Link to="/" className="nav-link">adminhome</Link>
        </div>
      </nav>
      <Routes>
        <Route path='/adminhome' element={<DoctorNavBar/>}></Route>
        
      </Routes><br/><br/><br/>
      <h1>View Doctors</h1>
      {doctors.length === 0 ? (
        <p>No doctors added yet.</p>
      ) : (
        <ul>
          {doctors.map((doctor, index) => (
            <li key={index} className="doctor-card">
              {doctor.image && <img src={URL.createObjectURL(doctor.image)} alt="Doctor" />}
              <div className="doctor-info">
                <h2>{doctor.name}</h2>
                <p>{doctor.specialization}</p>
                <div className="contact-icons">
                  <a href={`mailto:${doctor.email}`}>
                    <img src="images/emaillogo.jpg" alt="Email" />
                  </a>
                  <a href={doctor.linkedin} target="_blank" rel="noreferrer">
                    <img src="images/linkedinlogo.jpg" alt="LinkedIn" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

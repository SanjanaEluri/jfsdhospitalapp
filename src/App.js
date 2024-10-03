import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorManagement from './Admin/DoctorManagement';
import ViewDoctors from './Admin/ViewDoctors';

import DoctorNavBar from './Admin/DoctorNavBar';
import AdminHomepage from './Admin/AdminHomePage';
function App() {
  const [doctors, setDoctors] = useState([]);

  // Function to add a doctor
  const addDoctor = (doctorData) => {
    // Append the new doctor to the list
    setDoctors((prevDoctors) => [...prevDoctors, doctorData]);
  };

  return (
    // The Router should wrap all the routes, but there should only be one Router
    <Router>
      <Routes>
        {/* Route to add a doctor */}
        <Route path="/Adminnavbar" element={<DoctorNavBar/>} />
        <Route path="/" element={<AdminHomepage/>} />
        <Route path="/addDoctors" element={<DoctorManagement addDoctor={addDoctor} />} />

        {/* Route to view the list of doctors */}
        <Route path="/ViewDoctors" element={<ViewDoctors doctors={doctors} />} />

        {/* Default route */}
        <Route path="/" element={<DoctorManagement addDoctor={addDoctor} />} />
      </Routes>
    </Router>
  );
}

export default App;

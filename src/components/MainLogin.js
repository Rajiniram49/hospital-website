import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const MainLogin = () => {
  const navigate = useNavigate();

  const handleDoctorLogin = () => {
    navigate('/doctor-login');
  };

  const handlePatientLogin = () => {
    navigate('/patient-login');
  };

  return (
    <div className="main-login">
      <h1>Welcome to the Hospital Appointment System</h1>
      <h2>Please choose your login type:</h2>
      <button onClick={handleDoctorLogin}>Doctor Login</button>
      <button onClick={handlePatientLogin}>Patient Login</button>
    </div>
  );
};

export default MainLogin;

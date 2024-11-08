import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLogin from './components/MainLogin';
import DoctorLogin from './components/DoctorLogin';
import PatientLogin from './components/PatientLogin';
import DoctorDashboard from './components/DoctorDashboard';
import AppointmentBooking from './components/AppointmentBooking';
import PatientDashboard from './components/PatientDashboard'; // New patient dashboard
import { auth } from './firebaseConfig';

import App2 from './App2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App2 />} />
        <Route path="/mainlogin" element={<MainLogin />} />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/patient-login" element={<PatientLogin />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/book-appointment" element={<AppointmentBooking />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} /> {/* New route */}
      </Routes>
    </Router>
  );
};

export default App;

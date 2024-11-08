import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const authorizedDoctorEmails = [
  'rajiniram49@gmail.com', // Replace with actual doctor emails
  // Add more authorized emails as needed
];

const DoctorLogin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if the user email is in the authorized doctor emails
      if (!authorizedDoctorEmails.includes(user.email)) {
        throw new Error('You are not authorized to access this page');
      }

      navigate('/doctor-dashboard'); // Redirect to doctor dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Doctor Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default DoctorLogin;

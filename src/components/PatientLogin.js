import React, { useState } from 'react';
import { auth, provider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const PatientLogin = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate('/patient-dashboard'); // Redirect to patient dashboard after login
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2>Patient Login</h2>
      <button onClick={handleLogin}>Login with Google</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PatientLogin;

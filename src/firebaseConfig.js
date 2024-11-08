import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database'; // Import for Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDbOxPdCO7RlHftspOc6fjYPmqn2UWNh7s",
  authDomain: "hospital-booking-73f81.firebaseapp.com",
  databaseURL: "https://hospital-booking-73f81-default-rtdb.firebaseio.com/", // Add your database URL
  projectId: "hospital-booking-73f81",
  storageBucket: "hospital-booking-73f81.appspot.com", // Fixed to use .appspot.com
  messagingSenderId: "543047375937",
  appId: "1:543047375937:web:ebc11b9316c57ab71e7ac0",
  measurementId: "G-2CT21E1E4P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Initialize Realtime Database
export const db = getDatabase(app); // Changed from Firestore to Realtime Database

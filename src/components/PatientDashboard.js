import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { ref, onValue, set } from 'firebase/database'; // Import necessary functions from Firebase Realtime Database
import '../styles.css'; // Import the CSS file

const PatientDashboard = () => {
  const [slots, setSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSlots = () => {
      const slotsRef = ref(db, 'slots'); // Reference to the 'slots' node in the Realtime Database
      onValue(slotsRef, (snapshot) => {
        const slotList = [];
        snapshot.forEach((childSnapshot) => {
          const slotData = childSnapshot.val();
          const slotId = childSnapshot.key;
          slotList.push({ id: slotId, ...slotData });
        });
        setSlots(slotList);
        // Filter only booked slots for the booked status section
        setBookedSlots(slotList.filter(slot => slot.booked));
      });
    };

    fetchSlots();
  }, []);

  const handleBookSlot = async (slotId) => {
    const slotRef = ref(db, `slots/${slotId}`);
    try {
      await set(slotRef, (prev) => ({ ...prev, booked: true, patientId: 'patientId', approved: false })); // Update booked status
      alert('Slot booked successfully!');
    } catch (error) {
      setError('Failed to book slot. Please try again.');
    }
  };

  return (
    <div>
      <h2>Available Doctor Slots</h2>
      {slots.length === 0 ? (
        <p>No available slots.</p>
      ) : (
        <ul>
          {slots.map(slot => (
            <li key={slot.id}>
              {slot.date} at {slot.time} - {slot.booked ? 'Booked' : 'Available'}
              {!slot.booked && (
                <button onClick={() => handleBookSlot(slot.id)}>Book Slot</button>
              )}
              {slot.booked && <span> - {slot.approved ? 'Approved' : 'Pending Approval'}</span>}
            </li>
          ))}
        </ul>
      )}

      <h2>Your Booked Slots</h2>
      {bookedSlots.length === 0 ? (
        <p>No slots booked.</p>
      ) : (
        <ul>
          {bookedSlots.map(slot => (
            <li key={slot.id}>
              {slot.date} at {slot.time} - {slot.approved ? 'Approved' : 'Pending Approval'}
            </li>
          ))}
        </ul>
      )}

      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default PatientDashboard;

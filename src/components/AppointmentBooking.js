import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import '../styles.css'; // Import the CSS file

const AppointmentBooking = () => {
  const [slots, setSlots] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSlots = async () => {
      const slotsCollection = collection(db, 'slots');
      const slotSnapshot = await getDocs(slotsCollection);
      const slotList = slotSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSlots(slotList);
    };

    fetchSlots();
  }, []);

  const handleBooking = async (slotId) => {
    const slotDoc = doc(db, 'slots', slotId);
    await updateDoc(slotDoc, { booked: true });
    // Optionally, refresh slots after booking
    setSlots(slots.map(slot => slot.id === slotId ? { ...slot, booked: true } : slot));
  };

  const handleApprove = async (slotId) => {
    const slotDoc = doc(db, 'slots', slotId);
    await updateDoc(slotDoc, { approved: true });
    // Optionally, refresh slots after approval
    setSlots(slots.map(slot => slot.id === slotId ? { ...slot, approved: true } : slot));
  };

  return (
    <div>
      <h2>Available Slots</h2>
      {slots.length === 0 ? (
        <p>All slots are booked.</p>
      ) : (
        <ul>
          {slots.map(slot => (
            !slot.booked ? (
              <li key={slot.id}>
                {slot.date} at {slot.time} 
                <button onClick={() => handleBooking(slot.id)}>Book</button>
              </li>
            ) : (
              <li key={slot.id}>
                {slot.date} at {slot.time} (Booked) 
                {!slot.approved && <button onClick={() => handleApprove(slot.id)}>Approve</button>}
              </li>
            )
          ))}
        </ul>
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AppointmentBooking;

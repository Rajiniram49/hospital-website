import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig'; // Make sure this imports from Firebase Realtime Database
import { ref, set, get, onValue, update, remove } from 'firebase/database'; // Import necessary functions
import { useNavigate } from 'react-router-dom';
import '../styles.css'; // Import the CSS file

const DoctorDashboard = () => {
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('09');
  const [minute, setMinute] = useState('00');
  const [error, setError] = useState('');
  const [slots, setSlots] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  const handleAddSlot = async (e) => {
    e.preventDefault();
    if (!date || !hour || !minute) {
      setError('Please enter a date, hour, and minute');
      return;
    }

    const newSlot = {
      date,
      time: `${hour}:${minute}`,
      booked: false,
      approved: false,
      patientId: null // To store patient ID when booked
    };

    try {
      const newSlotRef = ref(db, 'slots/' + new Date().getTime()); // Using timestamp as unique key
      await set(newSlotRef, newSlot);
      alert('Slot added successfully to Firebase!'); // Alert on successful addition
      setDate('');
      setHour('09');
      setMinute('00');
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  const fetchSlots = () => {
    const slotsRef = ref(db, 'slots/');
    onValue(slotsRef, (snapshot) => {
      const slotList = [];
      snapshot.forEach((childSnapshot) => {
        slotList.push({ id: childSnapshot.key, ...childSnapshot.val() });
      });
      setSlots(slotList);

      // Set notifications for booked slots
      const newNotifications = slotList.filter(slot => slot.booked && !slot.approved);
      setNotifications(newNotifications);
    });
  };

  const handleApprove = async (slotId) => {
    const slotRef = ref(db, 'slots/' + slotId);
    await update(slotRef, { approved: true });
    // Remove notification and refresh slots
    setNotifications(notifications.filter(notification => notification.id !== slotId));
  };

  const handleReject = async (slotId) => {
    const slotRef = ref(db, 'slots/' + slotId);
    await update(slotRef, { booked: false, patientId: null });
    // Remove notification and refresh slots
    setNotifications(notifications.filter(notification => notification.id !== slotId));
  };

  useEffect(() => {
    fetchSlots(); // Fetch slots when the component mounts
  }, []);

  return (
    <div>
      <h2>Doctor Dashboard</h2>
      <form onSubmit={handleAddSlot}>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <select value={hour} onChange={(e) => setHour(e.target.value)} required>
          {[...Array(12).keys()].map((_, index) => (
            <option key={index} value={String(index + 1).padStart(2, '0')}>
              {String(index + 1).padStart(2, '0')} AM
            </option>
          ))}
          {[...Array(12).keys()].map((_, index) => (
            <option key={index + 12} value={String(index + 1 + 12).padStart(2, '0')}>
              {String(index + 1).padStart(2, '0')} PM
            </option>
          ))}
        </select>
        <select value={minute} onChange={(e) => setMinute(e.target.value)} required>
          {[0, 15, 30, 45].map((m) => (
            <option key={m} value={String(m).padStart(2, '0')}>
              {String(m).padStart(2, '0')}
            </option>
          ))}
        </select>
        <button type="submit">Add Slot</button>
      </form>
      {error && <p className="error">{error}</p>}

      {/* Notifications Section */}
      <h3>Notifications</h3>
      {notifications.length > 0 ? (
        <ul>
          {notifications.map(notification => (
            <li key={notification.id}>
              Slot on {notification.date} at {notification.time} has been booked. 
              <button onClick={() => handleApprove(notification.id)}>Approve</button>
              <button onClick={() => handleReject(notification.id)}>Reject</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No new bookings.</p>
      )}

      {/* Available Slots Section */}
      <h3>All Slots</h3>
      <ul>
        {slots.map(slot => (
          <li key={slot.id}>
            {slot.date} at {slot.time} {slot.booked ? '(Booked)' : ''}
            {slot.booked && slot.approved && <span> (Approved)</span>}
            {slot.booked && !slot.approved && <span> (Awaiting Approval)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorDashboard;

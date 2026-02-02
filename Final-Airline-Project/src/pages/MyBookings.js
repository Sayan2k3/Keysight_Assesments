import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function MyBookings() {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        axios.get('http://localhost:8080/bookings/my-bookings', {
            headers: { Authorization: user.authHeader }
        })
            .then(res => setBookings(res.data))
            .catch(err => console.error(err));
    }, [user, navigate]);

    const handleUpdateBooking = (bookingId, type, value) => {
        const payload = {};
        if (type === 'meal') payload.mealPreference = value;
        if (type === 'seat') payload.extraSeat = value;

        axios.put(`http://localhost:8080/bookings/${bookingId}`, payload, {
            headers: { Authorization: user.authHeader }
        })
            .then(res => {
                alert('Booking updated! Proceeding to payment for extra services...');
                navigate('/payment', {
                    state: {
                        booking: res.data,
                        isUpdate: true
                    }
                });
            })
            .catch(err => console.error(err));
    };

    return (
        <div className="container">
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#1a202c' }}>My Bookings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {bookings.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', background: 'white', borderRadius: '12px' }}>
                        <p style={{ fontSize: '1.2rem', color: '#718096' }}>No bookings found.</p>
                        <button className="btn-primary" onClick={() => navigate('/')} style={{ marginTop: '1rem' }}>
                            Book a Flight
                        </button>
                    </div>
                ) : (
                    bookings.map(booking => (
                        <div key={booking.id} className="card" style={{ padding: '0', overflow: 'hidden', border: '1px solid #edf2f7' }}>
                            {/* Header */}
                            <div style={{ background: '#f7fafc', padding: '1.5rem', borderBottom: '1px solid #edf2f7', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                                <div>
                                    <h3 style={{ margin: 0, color: '#2d3748' }}>{booking.flight.airlineName || "Paul's Airline"}</h3>
                                    <div style={{ color: '#718096', fontSize: '0.9rem' }}>Flight: {booking.flight.flightNumber}</div>
                                </div>
                                <span style={{
                                    padding: '0.4rem 1rem',
                                    borderRadius: '50px',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold',
                                    background: booking.status === 'CONFIRMED' ? '#e6fffa' : '#fff5f5',
                                    color: booking.status === 'CONFIRMED' ? '#38b2ac' : '#e53e3e',
                                    border: `1px solid ${booking.status === 'CONFIRMED' ? '#b2f5ea' : '#fed7d7'}`
                                }}>
                                    {booking.status}
                                </span>
                            </div>

                            {/* Body */}
                            <div style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem', marginBottom: '1.5rem' }}>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <div style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '0.25rem' }}>From</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{booking.flight.origin}</div>
                                    </div>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <div style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '0.25rem' }}>To</div>
                                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{booking.flight.destination}</div>
                                    </div>
                                    <div style={{ flex: 1, minWidth: '200px' }}>
                                        <div style={{ fontSize: '0.9rem', color: '#718096', marginBottom: '0.25rem' }}>Passenger</div>
                                        <div style={{ fontSize: '1.1rem' }}>{booking.passengerName}</div>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '1rem', background: '#ebf8ff', padding: '1rem', borderRadius: '8px', alignItems: 'center' }}>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.9rem', color: '#4299e1' }}>Seat Class</div>
                                        <div style={{ fontWeight: '600', color: '#2b6cb0' }}>{booking.seatClass}</div>
                                    </div>
                                    <div style={{ height: '30px', width: '1px', background: '#bee3f8' }}></div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: '0.9rem', color: '#4299e1' }}>Total Paid</div>
                                        <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#2c5282' }}>₹{booking.totalPrice}</div>
                                    </div>
                                </div>

                                {/* Services Section */}
                                <div style={{ marginTop: '2rem' }}>
                                    <h4 style={{ marginBottom: '1rem', borderBottom: '2px solid #edf2f7', paddingBottom: '0.5rem', display: 'inline-block' }}>Manage Add-ons</h4>
                                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                        <div style={{ flex: 1, minWidth: '200px' }}>
                                            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', fontSize: '0.9rem' }}>In-flight Meal (+₹250)</label>
                                            <select
                                                value={booking.mealPreference || 'None'}
                                                onChange={(e) => handleUpdateBooking(booking.id, 'meal', e.target.value)}
                                                style={{ width: '100%', padding: '0.6rem', background: '#f8fafc', borderColor: '#e2e8f0' }}
                                            >
                                                <option value="None">No Meal</option>
                                                <option value="Veg">Vegetarian Meal</option>
                                                <option value="Non-Veg">Non-Vegetarian Meal</option>
                                            </select>
                                        </div>

                                        <div style={{ flex: 1, minWidth: '200px' }}>
                                            <label style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '0.8rem',
                                                cursor: 'pointer',
                                                padding: '0.8rem',
                                                border: booking.extraSeat ? '2px solid #4299e1' : '1px solid #e2e8f0',
                                                borderRadius: '8px',
                                                transition: 'all 0.2s',
                                                background: booking.extraSeat ? '#ebf8ff' : 'white'
                                            }}>
                                                <input
                                                    type="checkbox"
                                                    checked={booking.extraSeat || false}
                                                    onChange={(e) => handleUpdateBooking(booking.id, 'seat', e.target.checked)}
                                                    style={{ width: 'auto', margin: 0 }}
                                                />
                                                <div>
                                                    <div style={{ fontWeight: 'bold' }}>Extra Seat</div>
                                                    <div style={{ fontSize: '0.8rem', color: '#718096' }}>+₹1000 (More comfort)</div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default MyBookings;

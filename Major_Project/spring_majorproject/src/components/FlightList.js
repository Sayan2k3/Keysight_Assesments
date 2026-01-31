import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FlightService from '../api/FlightService';

const FlightList = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadFlights();
    }, []);

    const loadFlights = async () => {
        try {
            const response = await FlightService.getAllFlights();
            setFlights(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error loading flights", error);
            setLoading(false);
        }
    };

    const deleteFlight = async (id) => {
        if (window.confirm("Are you sure you want to delete this flight?")) {
            try {
                await FlightService.deleteFlight(id);
                loadFlights();
            } catch (error) {
                console.error("Error deleting flight", error);
                alert("Failed to delete flight. Please try again.");
            }
        }
    };

    return (
        <div>
            <div className="page-header">
                <div className="page-title">
                    <h2>Flight Dashboard</h2>
                    <p>Manage your flight schedules and status</p>
                </div>
                <Link to="/add-flight" className="btn btn-primary">
                    + Add New Flight
                </Link>
            </div>

            <div className="content-card">
                {loading ? (
                    <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
                        Loading flights...
                    </div>
                ) : flights.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem' }}>
                        <h3 style={{ marginBottom: '1rem' }}>No Flights Found</h3>
                        <p style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>Get started by adding your first flight to the system.</p>
                        <Link to="/add-flight" className="btn btn-primary">Create Flight</Link>
                    </div>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table className="flight-table">
                            <thead>
                                <tr>
                                    <th>Flight No.</th>
                                    <th>Route</th>
                                    <th>Departure</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {flights.map(flight => (
                                    <tr key={flight.id}>
                                        <td><span className="flight-id">{flight.flightNumber}</span></td>
                                        <td>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <b>{flight.origin}</b>
                                                <span style={{ color: '#94a3b8' }}>➝</span>
                                                <b>{flight.destination}</b>
                                            </div>
                                        </td>
                                        <td>{new Date(flight.departureTime).toLocaleString(undefined, {
                                            month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
                                        })}</td>
                                        <td>
                                            <span className={`status-badge status-${flight.status?.toLowerCase().replace(' ', '-') || 'on-time'}`}>
                                                {flight.status || 'Scheduled'}
                                            </span>
                                        </td>
                                        <td>
                                            <div style={{ display: 'flex', gap: '1rem' }}>
                                                <Link to={`/edit-flight/${flight.id}`} style={{ color: 'var(--primary)', fontWeight: 600 }}>Edit</Link>
                                                <button onClick={() => deleteFlight(flight.id)} style={{ color: 'var(--danger)', fontWeight: 600 }}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FlightList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function FlightList() {
    const [filteredFlights, setFilteredFlights] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('economyPrice'); // Default sort by price
    const [sortDir, setSortDir] = useState('asc');
    const [maxPrice, setMaxPrice] = useState('');
    const [airline, setAirline] = useState('');
    const [searchCriteria, setSearchCriteria] = useState({ from: '', to: '' });

    const navigate = useNavigate();

    const fetchFlights = (params = {}) => {
        setLoading(true);
        // Merge current state with new params
        const queryParams = {
            origin: params.from !== undefined ? params.from : searchCriteria.from,
            destination: params.to !== undefined ? params.to : searchCriteria.to,
            maxPrice: params.maxPrice !== undefined ? params.maxPrice : maxPrice,
            airline: params.airline !== undefined ? params.airline : airline,
            sortBy: params.sortBy || sortBy,
            sortDir: params.sortDir || sortDir
        };

        let queryString = `?origin=${queryParams.origin}&destination=${queryParams.destination}&airline=${queryParams.airline}&sortBy=${queryParams.sortBy}&sortDir=${queryParams.sortDir}`;
        if (queryParams.maxPrice) {
            queryString += `&maxPrice=${queryParams.maxPrice}`;
        }

        axios.get(`http://localhost:8080/api/flights${queryString}`)
            .then(response => {
                setFilteredFlights(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching flights:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchFlights();
    }, []);

    const handleSearch = ({ from, to }) => {
        setSearchCriteria({ from, to });
        fetchFlights({ from, to });
    };

    const handleFilterApply = () => {
        fetchFlights();
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />

            {/* Filter and Sort Controls */}
            <div style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'flex-end',
                marginBottom: '1rem',
                alignItems: 'center',
                flexWrap: 'wrap',
                background: 'white',
                padding: '1rem',
                borderRadius: '12px'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 'bold' }}>Airline:</label>
                    <input
                        type="text"
                        value={airline}
                        onChange={(e) => setAirline(e.target.value)}
                        placeholder="Indigo..."
                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '120px' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 'bold' }}>Max Price:</label>
                    <input
                        type="number"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                        placeholder="Any"
                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc', width: '100px' }}
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 'bold' }}>Sort By:</label>
                    <select
                        value={sortBy}
                        onChange={(e) => {
                            setSortBy(e.target.value);
                        }}
                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        <option value="economyPrice">Price</option>
                        <option value="departureTime">Departure Time</option>
                    </select>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <label style={{ fontWeight: 'bold' }}>Order:</label>
                    <select
                        value={sortDir}
                        onChange={(e) => setSortDir(e.target.value)}
                        style={{ padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                    >
                        <option value="asc">Low to High (Asc)</option>
                        <option value="desc">High to Low (Desc)</option>
                    </select>
                </div>

                <button onClick={handleFilterApply} className="btn-primary" style={{ padding: '0.5rem 1.5rem', marginLeft: '1rem' }}>
                    Apply Filters
                </button>
            </div>

            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Available Flights ({filteredFlights.length})</h2>

            {loading ? (
                <p>Loading flights...</p>
            ) : filteredFlights.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '3rem', background: 'white', borderRadius: '12px' }}>
                    <h3>No flights found matching your search.</h3>
                    <p>Try different cities, adjust filters, or clear the search.</p>
                </div>
            ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {filteredFlights.map(flight => (
                        <div key={flight.id} className="flight-card" style={{
                            display: 'flex',
                            background: 'white',
                            borderRadius: '12px',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            padding: '1.5rem',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}>
                            {/* Airline Info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minWidth: '200px' }}>
                                <div style={{ fontSize: '2rem' }}>✈️</div>
                                <div>
                                    <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>{flight.airlineName || "Paul's Airline"}</div>
                                    <div style={{ color: '#718096', fontSize: '0.9rem' }}>{flight.flightNumber}</div>
                                </div>
                            </div>

                            {/* Route Info */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flex: 1, justifyContent: 'center' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{flight.origin}</div>
                                    <div style={{ color: '#718096', fontSize: '0.9rem' }}>{new Date(flight.departureTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                                </div>
                                <div style={{ color: '#cbd5e0', fontSize: '0.8rem' }}>2h 30m</div>
                                <div style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{flight.destination}</div>
                                    <div style={{ color: '#718096', fontSize: '0.9rem' }}>--:--</div>
                                </div>
                            </div>

                            {/* Price & Action */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', minWidth: '250px', justifyContent: 'flex-end' }}>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1a202c' }}>₹{flight.economyPrice}</div>
                                    <div style={{ color: '#718096', fontSize: '0.8rem' }}>per adult</div>
                                </div>
                                <button
                                    className="btn-primary"
                                    style={{ padding: '0.8rem 2rem', fontSize: '1rem', borderRadius: '8px' }}
                                    onClick={() => navigate(`/book/${flight.id}`)}
                                >
                                    BOOK
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FlightList;

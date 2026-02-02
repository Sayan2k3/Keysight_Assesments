import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // In a real app we'd use the backend, but for basic auth:
            // login also needs to verify credentials.
            const response = await axios.post('http://localhost:8080/auth/login', { username, password });

            const authHeader = 'Basic ' + btoa(username + ':' + password);
            login({ ...response.data, authHeader });
            navigate('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="container" style={{ maxWidth: '450px', marginTop: '6rem' }}>
            <div className="card" style={{ padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', margin: '0 0 0.5rem 0', color: '#1a202c' }}>Welcome Back</h2>
                    <p style={{ color: '#718096', fontSize: '1rem' }}>
                        Ready for your next adventure? <br />
                        <span style={{ color: '#004aad', fontWeight: 'bold' }}>Fly high, pay less.</span>
                    </p>
                </div>

                {error && <div style={{
                    background: '#fff5f5',
                    color: '#c53030',
                    padding: '0.75rem',
                    borderRadius: '8px',
                    marginBottom: '1.5rem',
                    textAlign: 'center',
                    fontSize: '0.9rem'
                }}>{error}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" style={{ color: '#4a5568' }}>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                padding: '0.8rem',
                                fontSize: '1rem',
                                border: '2px solid #e2e8f0',
                                transition: 'all 0.2s',
                                borderRadius: '10px'
                            }}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" style={{ color: '#4a5568' }}>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                padding: '0.8rem',
                                fontSize: '1rem',
                                border: '2px solid #e2e8f0',
                                transition: 'all 0.2s',
                                borderRadius: '10px'
                            }}
                            placeholder="Enter your password"
                        />
                    </div>
                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem' }}>
                        Sign In
                    </button>
                    <div style={{ marginTop: '1.5rem', textAlign: 'center', color: '#718096' }}>
                        New here? <span style={{ color: '#004aad', cursor: 'pointer', fontWeight: 'bold' }} onClick={() => navigate('/register')}>Create an account</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;

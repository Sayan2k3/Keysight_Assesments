import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <Link to="/" className="brand">
                    <span>✈️</span> SkyLine
                </Link>
                <div className="nav-links">
                    <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                        Dashboard
                    </Link>
                    <Link to="/add-flight" className={`nav-item ${location.pathname === '/add-flight' ? 'active' : ''}`}>
                        Add Flight
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

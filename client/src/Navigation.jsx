import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Nav.css'

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Portfolio</h1>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
            </div> 
        </nav>
    );
}

export default Navigation;

import React from 'react';
import './globals.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Entrepreneur Hub</h1>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about-us">About Us</a></li>
        <li><a href="#project-form">Project Submission</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

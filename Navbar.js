// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Add your styling here

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        TheBookReviewApp
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;

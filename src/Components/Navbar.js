import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleSidebar }) => {
    return (
      <div className="navbar">
        <div className="menu-icon" onClick={toggleSidebar}>
          <span className="hamburger">&#9776;</span>
          <span className="title">E-commerce</span>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-icons">
          <span className="bell">&#128276;</span>
          <span className="user">&#128100;</span>
        </div>
      </div>
    );
  };
  
  export default Navbar;

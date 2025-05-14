import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { PiList } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <FaCoins className="icon" />
        <Link to="/" className="icon">
          Crypto<span>Mania</span>
        </Link>
      </div>
      <div className={`navbar-nav ${menuActive ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/AI">AI</Link>
        <Link to="/about">About Us</Link>
      </div>
      <div className="logo-list" onClick={toggleMenu}>
        <PiList className="icon-list" />
      </div>
    </nav>
  );
};

export default Navbar;

<<<<<<< HEAD
import React, { useState } from "react";
import { FaCoins } from "react-icons/fa";
import { PiList } from "react-icons/pi";
=======
import React from "react";
import { FaCoins } from "react-icons/fa";
>>>>>>> 973406ad9ce4e48c5e7ce1a90a47a28a15a5df21
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
<<<<<<< HEAD
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
=======
  return (
    <Link to="/">
      <nav className="navbar">
        <div className="logo">
          <FaCoins className="icon" />
        </div>
        <Link to="/">
          Crypto<span>Mania</span>
        </Link>
        <div className="navbar-nav">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="footer">
          <p>footer</p>
        </div>
      </nav>
    </Link>
>>>>>>> 973406ad9ce4e48c5e7ce1a90a47a28a15a5df21
  );
};

export default Navbar;

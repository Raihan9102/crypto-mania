import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
      </nav>
    </Link>
  );
};

export default Navbar;

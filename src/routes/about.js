import React from "react";
import "./about.css";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-header">
        <h1>About Us</h1>
        <p>Ini adalah halaman tentang kami.</p>
        <p>Berikut adalah beberapa informasi tentang kami:</p>
    <div className="about-container">
      <div className="profile-card">
        <img
          src="img/raihan.jpg"
          alt="M.Raihan Thaffan H"
          className="profile-image"
        />
        <h2>M.Raihan Thaffan H</h2>
        <p>JOBDESK</p>
        <p>DESKRIPSI DIRI</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <div className="profile-card">
        <img
          src="img/putra.jpg"
          alt="Hafiyah Putra"
          className="profile-image"
        />
        <h2>Hafiyah Putra</h2>
        <p>JOBDESK</p>
        <p>DESKRIPSI DIRI</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
      <div className="profile-card">
        <img
          src="img/ahmad.jpg"
          alt="Ahmad Rifada"
          className="profile-image"
        />
        <h2>Ahmad Rifada</h2>
        <p>JOBDESK</p>
        <p>DESKRIPSI DIRI</p>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:example@example.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
      </div>
    </div>
   </div> 
  );
};

export default About;
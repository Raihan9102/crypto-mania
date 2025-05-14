import React from "react";
import "./about.css";
import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-header">
<<<<<<< HEAD
      <h1>About Us</h1>
      <h2>Ini adalah halaman tentang kami.</h2>
      <h3>Berikut adalah beberapa informasi tentang kami :</h3>
      <div className="about-container">
        <div className="profile-card">
          <div className="card-image">
            <img src="./img/raihan.jpg" alt="profil.img" />
          </div>
          <p className="name">M.Raihan Thaffan H</p>
          <p>FRONT-END</p>
          <p>DESKRIPSI DIRI</p>
          <div className="social">
            <h1
              href="https://instagram.com/_raihanthaffan_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </h1>
            <h2
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </h2>
            <h3
              href="mailto:example@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </h3>
          </div>
        </div>

        <div className="profile-card">
          <div className="card-image">
            <img src="./img/putra.jpg" alt="profil.img" />
          </div>
          <p className="name">Hafiyah Putra R</p>
          <p>BACK-END</p>
          <p>DESKRIPSI DIRI</p>
          <div className="social">
            <h1
              href="https://instagram.com/Hffyan_29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </h1>
            <h2
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </h2>
            <h3
              href="mailto:example@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </h3>
          </div>
        </div>
        <div className="profile-card">
          <div className="card-image">
            <img src="./img/fada.jpg" alt="profil.img" />
          </div>
          <p className="name">Ahmad Rifada</p>
          <p>FRONT-END</p>
          <p>DESKRIPSI DIRI</p>
          <div className="social">
            <h1
              href="https://instagram.com/rifada005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </h1>
            <h2
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </h2>
            <h3
              href="mailto:example@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
=======
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
>>>>>>> 973406ad9ce4e48c5e7ce1a90a47a28a15a5df21

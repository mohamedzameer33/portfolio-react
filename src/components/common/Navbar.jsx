import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Optional for animations
import { FaDownload } from "react-icons/fa";
function Navbar({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <style>
        {`
          .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 3rem;
            background: rgba(31, 41, 55, 0.8); /* Semi-transparent dark gray-blue */
            position: sticky;
            top: 0;
            z-index: 1000;
            backdrop-filter: blur(10px); /* Glassmorphism effect */
            font-family: 'Poppins', sans-serif;
          }

          .navbar .logo {
            font-size: 1.8rem;
            font-weight: 700;
            background: linear-gradient(to right, #00E5FF, #FFD700); /* Cyan to golden yellow */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .nav-links {
            display: flex;
            list-style: none;
            gap: 1.5rem;
          }

          .nav-links li {
            margin: 0;
          }

          .nav-links a {
            color: #ecf0f1; /* Soft white */
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 400;
            transition: color 0.3s ease;
          }

          .nav-links a:hover {
            color: #ff9900; /* Golden orange */
          }

          .nav-toggler {
            display: none; /* Hidden on desktop */
            font-size: 1.8rem;
            color: #00E5FF; /* Cyan */
            background: none;
            border: none;
            cursor: pointer;
            transition: transform 0.3s ease;
          }

          .nav-toggler:hover {
            transform: scale(1.1);
          }

          .nav-toggler.open {
            color: #FFD700; /* Golden yellow when open */
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .navbar {
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              padding: 1rem 1.5rem;
            }

            .nav-links {
              display: ${isMenuOpen ? 'flex' : 'none'};
              flex-direction: column;
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background: rgba(31, 41, 55, 0.9); /* Slightly darker for mobile menu */
              padding: 1rem;
              gap: 1rem;
              text-align: center;
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
              transition: all 0.3s ease;
            }

            .nav-links li {
              margin: 0.5rem 0;
            }

            .nav-links a {
              font-size: 1rem;
              display: block;
              padding: 0.5rem;
            }

            .nav-toggler {
              display: block;
            }
          }

          @media (max-width: 480px) {
            .navbar {
              padding: 0.8rem 1rem;
            }

            .navbar .logo {
              font-size: 1.5rem;
            }

            .nav-links a {
              font-size: 0.9rem;
            }

            .nav-toggler {
              font-size: 1.5rem;
            }
          }
        `}
      </style>
      <nav className="navbar">
        <span className="logo">Mohamed Zameer</span>
        <button
          className={`nav-toggler ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? '✖' : '☰'} {/* Hamburger icon or close icon */}
        </button>
        <motion.ul
          className="nav-links"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          <li> <a href="/assets/cv.pdf" download="Mohamed_Zameer_CV.pdf" className="download-button2">
       
       Download CV  <FaDownload size={15} color="#007bff" className="download-icon" />
       </a></li>
        </motion.ul>
      </nav>
    </>
  );
}

export default Navbar;
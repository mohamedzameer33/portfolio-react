import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
import zameer from '../../assets/images/image.png';

import { FaDownload } from "react-icons/fa";

function Home() {
  return (
    <motion.section
      id="home"
      className="home"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="content">
          <img src={zameer} alt="Profile" className="profile-img" />
        <h1>Hi, I'm Mohamed Zameer S M</h1>
        
        <div className="heading-name" style={{ padding: 50, textAlign: "left", fontSize: "2.5rem" }}>
          <Typewriter 
            options={{
              strings: [
                "Frontend Developer",
                "Fullstack Developer",
                "React Developer",
                "Web Developer",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
            
          />
      
        </div>
   
        <motion.div  className="hero" whileHover={{ scale: 1.05 }}>
        <motion.a
  href="#projects"
  className="cta-button"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Explore My Work <FaRocket />
</motion.a>

        </motion.div>
        <a href="/assets/cv.pdf" download="Mohamed_Zameer_CV.pdf" className="download-button">
       
       Download CV  <FaDownload size={15} color="#007bff" className="download-icon" />
       </a>
      </div>
    </motion.section>
  );
}

export default Home;

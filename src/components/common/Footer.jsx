import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <p>&copy; 2025 Mohamed Zameer S.M. All rights reserved.</p>
      <div className="social-links">
        <motion.a
          href="https://github.com/mohamedzameer33"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub style={{color:"white"}}/>
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mohamed-zameer-s-m-4b3211301"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin  style={{color:"#0077B5"}}/>
        </motion.a>
        <motion.a
          href="https://x.com/itx_zameeroffl"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
        >
          <FaTwitter style={{color:"#1DA1F2"}} />
        </motion.a>
      </div>
    </motion.footer>
  );
}

export default Footer;
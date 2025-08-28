import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

import PortfolioProvider from './components/context/PortfolioContext';
import './styles/App.css';
import StarfieldBackground from './components/sections/StarfieldBackground';


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Check URL for /admin and prompt for password
  useEffect(() => {
    const handleURLChange = () => 
    window.addEventListener('hashchange', handleURLChange);
    handleURLChange(); // Check on initial load
    return () => window.removeEventListener('hashchange', handleURLChange);
  }, [showAdmin]);

  return (
    <PortfolioProvider>
      <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <StarfieldBackground />
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        
        <main>
          <Home />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Contact />
        </main>
        <Footer />
        
      </div>
    </PortfolioProvider>
  );
}

export default App;
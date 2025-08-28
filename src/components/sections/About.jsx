import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaReact, FaCss3Alt, FaHtml5,FaJs  } from 'react-icons/fa';
import { SiGit } from 'react-icons/si';import { SiFirebase } from 'react-icons/si';



   // fallback: Gmail icon

import { 
  SiBootstrap,   // Bootstrap
  SiTailwindcss  // Tailwind CSS
} from 'react-icons/si';

import { 
  FaJava,        // Java
  FaGithub       // GitHub
} from 'react-icons/fa';

import { 
  SiSpringboot,  // Spring Boot
  SiMysql,       // MySQL
  SiMongodb,     // MongoDB
  SiPostman      // Postman
} from 'react-icons/si';


function About() {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="content">
        <h2>About Me 👨‍💻</h2>
        <p><ul className='tick'><li>As a passionate and versatile full-stack developer, I specialize in crafting seamless and dynamic web applications that marry intuitive front-end interfaces with robust back-end functionality. With a strong foundation in Java and Spring Boot, I excel at designing and implementing RESTful APIs that power responsive and scalable web solutions.</li><br/><li>On the front-end, my expertise spans React, HTML, CSS, and JavaScript, allowing me to transform complex design ideas into visually appealing and user-friendly interfaces. I'm proficient in leveraging modern styling frameworks like Tailwind CSS and Bootstrap to ensure a polished and consistent user experience.</li>
<br/><li>
My commitment to code quality and reliability is evident in my proficiency with unit testing and best practices, ensuring maintainable and efficient solutions. With a solid grasp of database management using MySQL, I'm equipped to handle data-driven applications with precision. Whether it's building from scratch or optimizing existing systems, my goal is to deliver high-performance, full-stack solutions that meet and exceed expectations 🌸.</li></ul>
</p>
        <div className="skills">
          <h3>Skills</h3>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.li whileHover={{ scale: 1.1 }}><FaReact style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color:"cyan" }} />
            React.js</motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><FaJs style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color:"Yellow" }} /> JavaScript</motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><FaCss3Alt style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "blue" }} /> CSS</motion.li>
            <motion.li whileHover={{ scale: 1.1 }}><FaHtml5 style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color:"Red" }}/> HTML</motion.li>
           
          
          <motion.li whileHover={{ scale: 1.1 }}>
              <FaJava style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "red",fontSize:"20px" }} title="Java" />
              Java</motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
             
              <SiSpringboot style={{ filter: "drop-shadow(0 0 10px #dbdbdb)",color: "#228B22"
 }}  title="Spring Boot" /> Spring Boot 
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
            
              <SiBootstrap  style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "#CBC3E3"}} title="Bootstrap" />  Bootstrap
            
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
            
              <SiTailwindcss style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "cyan"}} title="Tailwind CSS" />  Tailwind CSS
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              {" "}
              <img style={{filter: "drop-shadow(0 0 4px #dbdbdb)"}} src="/assets/emailjs.png" alt="EmailJS" width={20} height={20} />
              Emailjs
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              {" "}
              <SiMysql style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "#F29111",fontSize:"20px"}}  title="MySQL" />MySQL
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
             
              <SiMongodb style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "#4DB33D"}}  title="MongoDB" /> MongoDB
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
             
            <SiFirebase  style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "#FF8C00" }} title="Firebase" />Firebase
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
          
            <SiGit title="Git"  style={{ filter: "drop-shadow(0 0 8px #dbdbdb)",color: "red" }}   />Git
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
          
            <FaGithub style={{ filter: "drop-shadow(0 0 4px #dbdbdb)",color: "#211F1F" }}  title="GitHub" /> GitHub
            </motion.li>
            
            <motion.li whileHover={{ scale: 1.1 }}>
              <SiPostman style={{ filter: "drop-shadow(0 0 8px #dbdbdb)",color: "red" }}  title="Postman" />Postman
            </motion.li></motion.ul>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
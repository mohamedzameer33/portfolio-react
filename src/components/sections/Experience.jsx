import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    role: 'Front-end Developer Intern',
    company: 'KDR Tech Innovation, Bengaluru',
    duration: 'Jul 2025 - Present',
    description1: 'Built user interfaces and reusable components for web applications using React and modern frontend technologies.',
    description2: 'Translated design mockups into functional, responsive layouts, ensuring cross-device compatibility.',
    description3: 'Participated in task-based development, delivering projects within deadlines while optimizing performance and usability.',
  },
 


  





  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Salam Technologies, Tirunelveli',
    duration: 'Jan 2025 - Jul 2025',
    description1: ' Developed responsive web pages and interactive UI components using HTML, CSS, JavaScript, and React, ensuring a seamless user experience.',
    description2: 'ICollaborated with the team to integrate APIs and implement dynamic features, enhancing application functionality and performance.',
    description3: 'Maintained project code quality and version control using Git, improving workflow and collaboration efficiency.',
  },
];

const TimelineItem = ({ item, type }) => {
  return (
    <motion.div
      className="timeline-item"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="timeline-content">
        {type === 'experience' && (
          <>
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <span>{item.duration}</span>
            <br />
            <ul className="tick">
              <li>{item.description1}</li>
              <li>{item.description2}</li>
              <li>{item.description3}</li>
            </ul>
          </>
        )}
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="content">
        <h2>My Experience 💻</h2>
        <div className="timeline">
          {experienceData.map((exp) => (
            <TimelineItem key={exp.id} item={exp} type="experience" />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
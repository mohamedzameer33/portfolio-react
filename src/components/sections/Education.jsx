import React from 'react';
import { motion } from 'framer-motion';


const educationData = [
  {
    id: 1,
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    institution: 'PET Engineering College, Vallioor',
    year: '2020 - 2024',
    percentage: '77',
  },
  {
    id: 2,
    degree: 'HSC - 12th Standard',
    institution: 'Rose Mary Matriculation Higher Secondary School, Tirunelveli',
    year: '2019 - 2020',
    percentage: '67',
  },
  {
    id: 3,
    degree: 'SSLC - 10th Standard',
    institution: 'Rose Mary Matriculation Higher Secondary School, Tirunelveli',
    year: '2017 - 2018',
    percentage: '87',
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
        {type === 'education' && (
          <>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            <span>{item.year}</span>
            <br />
            <span>Percentage: {item.percentage}%</span>
          </>
        )}
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="content">
        <h2>My Education 🎓</h2>
        <div className="timeline">
          {educationData.map((edu) => (
            <TimelineItem key={edu.id} item={edu} type="education" />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
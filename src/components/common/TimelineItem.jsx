import React from 'react';
import { motion } from 'framer-motion';

function TimelineItem({ item, type, onEdit, onDelete }) {
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
            <span>{item.year}</span><br/>
            <span >Percentage : {item.percentage}%</span>
          </>
        )}
        {type === 'experience' && (
          <>
            <h3>{item.role}</h3>
            <h4>{item.company}</h4>
            <span>{item.duration}</span><br/><br/>
            <span ><ul className='tick' ><li>{item.description1}</li></ul></span>
            <span><ul  className='tick' ><li>{item.description2}</li></ul></span>
            <span><ul  className='tick' ><li>{item.description3}</li></ul></span>
          </>
        )}
        {onEdit && (
          <div className="timeline-actions">
            <button onClick={() => onEdit(item)}>Edit</button>
            <button onClick={() => onDelete(item.id)}>Delete</button>
          </div>
        )}
      </div>
      <div className="timeline-dot"></div>
    </motion.div>
  );
}

export default TimelineItem;
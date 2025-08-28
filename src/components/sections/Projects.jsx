import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';


const projectData = [
  {
    id: 1,
    title: ' Cric Mania - Cricket Score Chasing Game',
    description:
      'Developed an interactive cricket game where players can chase a randomly generated target by choosing between two types of shots: a safe shot that yields minimal runs and a lofted shot that can score higher runs but carries a risk of getting out. Designed a responsive user interface using Bootstrap and custom CSS, featuring a dark sidebar and a visually distinct game area with a dynamic run indicator. Built a real-time dashboard that displays scores, wickets, overs, and the target, with a proper game-over state. Managed game logic and state using React hooks, and implemented local storage to save and retrieve player progress.',
    category: 'Front End',
    tech: '#React #CSS3 #Javascript #Bootstrap #HTML5 ',
    link: 'https://zamcricmania.netlify.app/',
    link2: 'https://github.com/mohamedzameer33/cricmania.git',
    image: 'cricmania.png', // Correct path: public/assets/cricmania.png
  },
  {
    id: 2,
    title: 'Blog App with Bluetick ✅',
    description:
      'Developed a Blog Application using React and Firebase featuring a Google Sign-In authentication system that allows users to create a profile and update their display name. Implemented a blue tick verification system where the admin can assign verified status to users, which is visible to all visitors. Users can view blogs, read content, and post comments, enabling interactive engagement. The app leverages Firebase for real-time data storage, authentication, and dynamic updates, ensuring a seamless user experience.',
    category: 'Full Stack',
    tech: '#React #Javascript #Firebase #CSS3 #Bootstrap',
    link: 'https://zameerblog.netlify.app/',
    link2: 'https://github.com/mohamedzameer33/blogapp.git',
    image: 'blog.png', // Place in public/assets/ecommerce.png
  },
  {
    id: 3,
    title: 'Electric-Shop Website',
    description:
      'Developed a static website featuring sections for contact details, services offered, and a gallery showcasing work completed for clients. Integrated real-time shop timings and a user review feature to enhance customer engagement and build trust. Designed a responsive layout using Bootstrap, ensuring a smooth and consistent user experience across different devices and screen sizes.',
    category: 'Front End',
    tech: '#HTML5 #CSS3 #Bootstrap #JavaScript',
    link: 'https://websitezam1.netlify.app/',
    link2: 'https://github.com/mohamedzameer33/blogapp.git',
    image: 'fine.png', // Place in public/assets/taskmanager.png
  },
 
  {
    id: 4,
    title: 'Portfolio Website',
    description:
      'Developed a static Portfolio Website using HTML, CSS, JavaScript, and Bootstrap to showcase personal projects and skills. Designed a responsive and visually appealing layout that works seamlessly across different devices and screen sizes, ensuring a smooth user experience. Included sections for project highlights, contact information, and skill display to effectively present professional work.',
    category: 'Front End',
    tech: '#HTML5 #CSS3 #Bootstrap #JavaScript',
    link: 'https://portfolio1-zameer.netlify.app/',
    link2: 'https://github.com/mohamedzameer33/portfolio.git',
    image: 'portfolio.png', // Place in public/assets/taskmanager.png
  },
];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
      transition={{ duration: 0.3 }}
    >
      {project.image && (
        <img
          src={`/assets/${project.image}`} // Updated path: /assets/cricmania.png
          alt={project.title}
          className="project-img"
          onError={(e) => console.error(`Failed to load image: /assets/${project.image}`)}
        />
      )}
      <h3>{project.title}</h3>
      <p style={{ maxHeight: isExpanded ? 'none' : '100px', overflow: 'hidden' }}>
        {project.description}
      </p>
      {project.description.length > 100 && (
        <button style={{backgroundColor:"grey",color: "#7CB9E8"}}
          className={`view-${isExpanded ? 'less' : 'more'}`}
          onClick={toggleExpand}
        >
          {isExpanded ? 'View Less' : 'View More'}
        </button>
      )}
      <br />
      <span className="category">{project.category}</span>
      <br />
      <span className="category2">{project.tech}</span>
      <div className="project-links">
        <a style={{color: "#7CFC00"}} href={project.link} target="_blank" rel="noopener noreferrer">
          View Project <FaExternalLinkAlt />
        </a>
        <a style={{color:"white"}} href={project.link2} target="_blank" rel="noopener noreferrer">
          GitHub <FaGithub style={{ filter: 'drop-shadow(0 0 10px #dbdbdb)' }} title="GitHub" />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' ? projectData : projectData.filter((project) => project.category === filter);

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="content">
        <h2>My Projects 📂</h2>
        <div className="filter-buttons">
          <motion.button
            onClick={() => setFilter('All')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={filter === 'All' ? 'active' : ''}
          >
            All
          </motion.button>
          <motion.button
            onClick={() => setFilter('Front End')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={filter === 'Front End' ? 'active' : ''}
          >
            Front End
          </motion.button>
          <motion.button
            onClick={() => setFilter('Full Stack')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={filter === 'Full Stack' ? 'active' : ''}
          >
            Full Stack
          </motion.button>
        </div>
        <div className="project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p>No projects found for this category.</p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
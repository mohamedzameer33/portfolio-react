import React, { createContext, useState, useEffect } from 'react';

export const PortfolioContext = createContext();

const PortfolioProvider = ({ children }) => {
  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem('projects');
    return saved ? JSON.parse(saved) : [
      { id: 1, title: 'Sample Project', category: 'Front End',tech:'react', description: 'A sample project.', image: '/assets/images/sample.jpg', link: '#' },
    ];
  });

  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem('education');
    return saved ? JSON.parse(saved) : [{ id: 1, degree: 'B.Sc. Computer Science', institution: 'XYZ University',percentage:'75', year: '2018-2022' }];
  });

  const [experience, setExperience] = useState(() => {
    const saved = localStorage.getItem('experience');
    return saved ? JSON.parse(saved) : [{ id: 1, role: 'Frontend Developer', company: 'ABC Corp', duration: '2022-Present' }];
  });

  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : [];
  });

  const updateProject = (updatedProject) => {
    setProjects(projects.map((p) => (p.id === updatedProject.id ? updatedProject : p)));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  const updateEducation = (updatedEdu) => {
    setEducation(education.map((e) => (e.id === updatedEdu.id ? updatedEdu : e)));
  };

  const deleteEducation = (id) => {
    setEducation(education.filter((e) => e.id !== id));
  };

  const updateExperience = (updatedExp) => {
    setExperience(experience.map((e) => (e.id === updatedExp.id ? updatedExp : e)));
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter((e) => e.id !== id));
  };

  const addContact = (contact) => {
    setContacts([...contacts, { id: Date.now(), ...contact }]);
  };

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('education', JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    localStorage.setItem('experience', JSON.stringify(experience));
  }, [experience]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <PortfolioContext.Provider
      value={{
        projects,
        setProjects,
        updateProject,
        deleteProject,
        education,
        setEducation,
        updateEducation,
        deleteEducation,
        experience,
        setExperience,
        updateExperience,
        deleteExperience,
        contacts,
        addContact,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioProvider;
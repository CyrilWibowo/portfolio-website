import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      {/* Project Thumbnail */}
      <div className="project-image-wrapper">
        <img
          src={project.thumbnail}
          alt={project.name}
          className="project-image"
        />
      </div>

      {/* Project Content */}
      <div className="project-content">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-description">{project.description}</p>

        {/* Technology Tags */}
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="project-links">
          <a
            href={project.githubUrl}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="project-link project-link-demo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.name}`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
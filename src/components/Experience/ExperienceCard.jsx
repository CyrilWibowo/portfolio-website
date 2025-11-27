import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      {/* Company Logo */}
      <div className="experience-logo-wrapper">
        <img
          src={experience.logo}
          className="experience-logo"
        />
      </div>

      {/* Experience Content */}
      <div className="experience-content">
        <div className="experience-header">
          <h3 className="experience-position">{experience.position}</h3>
          <span className="experience-date">{experience.dateRange}</span>
        </div>
        <h4 className="experience-company">{experience.company}</h4>
        <p className="experience-description">{experience.description}</p>

        {/* Responsibilities */}
        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <ul className="experience-responsibilities">
            {experience.responsibilities.map((responsibility, index) => (
              <li key={index} className="experience-responsibility-item">
                {responsibility}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
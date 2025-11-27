import React from 'react';
import './Experience.css';
import ExperienceCard from './ExperienceCard';
import { experienceData } from '../../data/experienceData';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
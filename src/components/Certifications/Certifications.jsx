import React from 'react';
import './Certifications.css';
import CertificationsCard from './CertificationsCard';
import { certificationsData } from '../../data/certificationsData';

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certificationsData.map((certification) => (
            <CertificationsCard key={certification.id} certification={certification} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
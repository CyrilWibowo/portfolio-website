import React from 'react';
import './CertificationsCard.css';

const CertificationsCard = ({ certification }) => {
  const CardContent = (
    <>
      {/* Certificate Badge/Thumbnail */}
      <div className="certification-image-wrapper">
        <img
          src={certification.thumbnail}
          alt={`${certification.name} badge`}
          className="certification-image"
        />
      </div>

      {/* Certificate Info */}
      <div className="certification-info">
        <h3 className="certification-name">{certification.name}</h3>
        <p className="certification-organization">{certification.organization}</p>
        <span className="certification-date">{certification.date}</span>
      </div>
    </>
  );

  // If there's a certificate URL, wrap in a link
  if (certification.certificateUrl) {
    return (
      <a
        href={certification.certificateUrl}
        className="certification-card certification-card-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${certification.name} certificate`}
      >
        {CardContent}
      </a>
    );
  }

  // Otherwise, just a div
  return <div className="certification-card">{CardContent}</div>;
};

export default CertificationsCard;
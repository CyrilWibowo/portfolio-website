import React from 'react';
import './Profile.css';
import { profileData } from '../../data/profileData';

const Profile = () => {
  return (
    <aside className="profile">
      <div className="profile-container">
        {/* Profile Picture */}
        <div className="profile-image-wrapper">
          <img
            src={profileData.profileImage}
            alt={profileData.name}
            className="profile-image"
          />
        </div>

        {/* Name and Title */}
        <div className="profile-header">
          <h1 className="profile-name">{profileData.name}</h1>
          <p className="profile-title">{profileData.title}</p>
        </div>

        {/* About Me Section */}
        <section className="profile-section">
          <h2 className="profile-section-title">About Me</h2>
          <p className="profile-about">{profileData.about}</p>
        </section>

        {/* Skills Section */}
        <section className="profile-section">
          <h2 className="profile-section-title">Skills</h2>
          <div className="skills-container">
            {profileData.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="profile-section">
          <h2 className="profile-section-title">Connect</h2>
          <div className="contact-info">
            <p className="contact-item">
              <span className="contact-icon">✉️</span>
              <span className="contact-label">Email</span>
              <span className="contact-value">{profileData.contact.email}</span>
            </p>
            <p className="contact-item">
              <span className="contact-icon">☎️</span>
              <span className="contact-label">Phone</span>
              <span className="contact-value">{profileData.contact.phone}</span>
            </p>
          </div>
          <div className="social-logos">
            {profileData.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-logo-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} alt={social.name} className="social-logo" />
              </a>
            ))}
          </div>
        </section>

        {/* Resume Link */}
        <a
          href={profileData.resumeUrl}
          className="resume-button"
          download
        >
          Download Resume
        </a>
      </div>
    </aside>
  );
};

export default Profile;
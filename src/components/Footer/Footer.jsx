import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Made with <span className="footer-highlight">React</span> & <span className="footer-highlight">Vite</span>
        </p>
        <div className="footer-links">
          <a
              href="https://github.com/CyrilWibowo/portfolio-website"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View portfolio source code on GitHub"
            >
              <span className="footer-link-text">This website is open source! View it here!</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/889/889111.png"
                alt="GitHub"
                className="footer-github-logo"
              />
            </a>
        </div>
        <p className="footer-copyright">
          © {currentYear} All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
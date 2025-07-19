// client/src/pages/Contact.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Contact.css';
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Example icons

const Contact = () => {
  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="contact-content">
        <div className="contact-info">
          {/* Increased font size for this message */}
          <p className="opportunities-message">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="social-links">
            <a href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
              <span>your.email@example.com</span>
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
        </div>
        {/* The contact-form-container div is now removed from here */}
      </div>
    </SectionWrapper>
  );
};

export default Contact;
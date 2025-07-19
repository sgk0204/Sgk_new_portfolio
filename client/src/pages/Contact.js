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
            <a href="https://gopalakrishnasista@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope />
              <span>gopalakrishnasista@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/sista-gopala-krishna-243019237/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/sgk0204" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://www.instagram.com/gopalakrishna_2004/" target="_blank" rel="noopener noreferrer">
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
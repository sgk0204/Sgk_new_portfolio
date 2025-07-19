// client/src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Sista Gopala Krishna. All rights reserved.</p>
        <div className="footer-social-links">
          {/* Add social icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
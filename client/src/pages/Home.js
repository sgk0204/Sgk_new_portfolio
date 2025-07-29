// client/src/pages/Home.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Home.css';
// Import your resume file
import ResumePDF from '../assets/Sista_GopalaKrishna__Copy_22 (1).pdf'; // Adjust this path!

const Home = () => {
  const smoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <SectionWrapper id="home">
      <div className="home-content">
        <h1 className="hero-title">Hello, I'm <span className="highlight">Sista Gopala Krishna</span>.</h1>
        <p className="hero-subtitle">Keep It Simple, Solve It Smart | Bharat Electronics Limited (BEL) Probationary Engineer (E-2) </p>
        <div className="cta-buttons-container"> {/* Add a container for buttons */}
          <button className="cta-button secondary-button" onClick={() => smoothScroll('projects')}>View My Work</button>
          {/* New Download Resume Button */}
          <a
            href={ResumePDF} // Link to your resume PDF
            download="SistaGopalaKrishna_Resume.pdf" // Suggested filename when downloaded
            className="cta-button secondary-button" // Apply cta-button style and a new secondary style
          >
            Download Resume
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Home;
// client/src/pages/Home.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Home.css';

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
        <button className="cta-button" onClick={() => smoothScroll('projects')}>View My Work</button>
      </div>
    </SectionWrapper>
  );
};

export default Home;
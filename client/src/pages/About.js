// client/src/pages/About.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './About.css';
import profilePic from '../assets/profile2.jpg'; // Add your image here

const About = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="Your Profile" />
        </div>
        <div className="about-text">
          <p>
           Hi! I'm Sista Gopala Krishna, a Computer Science and Engineering graduate from NIT Andhra Pradesh. I love turning ideas into reality through code and technology.
          </p>
          <p>
            My journey started with simple curiosity – wondering how apps work, how websites are built, and how computers solve problems. This curiosity grew into a passion for creating software that actually helps people. I've worked on everything from mobile apps to research projects, always excited to learn something new.
          </p>
          <p>
            I recently graduated and now work as a Probationary Engineer (E-2) at Bharat Electronics Limited (BEL), where I get to contribute to India's defense technology. It's amazing to see how the coding skills I learned in college now help build systems that protect our country.
          </p>
          <p>
            What drives me? The moment when a complex problem becomes a simple, working solution. Whether I'm building a user-friendly app, solving tricky algorithms, or working on research papers, I enjoy making technology that's both powerful and easy to use. I believe the best software doesn't just work well – it makes people's lives better.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, participating in coding challenges, or designing graphics. I'm always ready for the next exciting project that pushes me to grow and create something meaningful.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
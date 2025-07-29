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
        I am <strong>Sista Gopala Krishna</strong>, a <strong>Computer Science Engineering</strong> graduate from <strong>NIT Andhra Pradesh</strong>, currently serving as a <strong>Probationary Engineer (E-2)</strong> at <strong>Bharat Electronics Limited (BEL)</strong>. I have hands-on experience in software development, having worked as a Software Developer at <strong>VVF CropDoctor</strong> where I designed <strong>Flutter applications</strong> with secure authentication systems. My technical expertise spans across multiple programming languages including <strong>Java</strong>, <strong>C++</strong>, and <strong>Python</strong>, along with experience in web technologies like <strong>ReactJS</strong>, <strong>NodeJS</strong>, and <strong>databases</strong>. I have strong problem-solving skills and have contributed to research in algorithms, presenting a paper at <strong>ICAMM 2023</strong>. With experience in <strong>full-stack development</strong>, <strong>machine learning</strong>, and <strong>mobile app development</strong>, I am passionate about creating efficient solutions and continuously expanding my technical knowledge in the field of computer science and engineering.
    </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
// client/src/pages/Education.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './EducationExperience.css'; // Shared CSS

const educationData = [
  {
    degree: 'B.Tech in Computer Science Engineering',
    university: 'National Institute of Technology Andhra Pradesh ',
    duration: '2021 - 2025',
    details: 'CGPA: 7.80/10.00 ',
  },
  {
    degree: 'Intermediate in Mathematics, Physics, Chemistry (MPC)',
    university: 'Aditya Junior College',
    duration: '2019 - 2021',
    details: 'Percentage: 97.6%',
  },
  {
    degree: '10th Standard',
    university: 'Bhashyam Public School',
    duration: '2018 - 2019',
    details: 'CGPA: 10.00/10.00',
  },
];

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="timeline-container">
        {educationData.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>{edu.degree}</h3>
              <h4>{edu.university}</h4>
              <p className="duration">{edu.duration}</p>
              <p>{edu.details}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Education;
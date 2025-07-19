// client/src/pages/Experience.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './EducationExperience.css'; // Shared CSS

const experienceData = [
  {
    title: 'Probationary Engineer (E-2)',
    company: 'Bharat Electronics Limited (BEL)',
    duration: 'Aug 2025 - Present',
    description: [

    ],
  },
  {
    title: 'Software Engineer Intern(Remote)',
    company: 'VVF CropDoctor',
    duration: 'Oct 2024 - Jan 2025',
    description: [
      'Designed and developed a modern Flutter mobile application with custom animations and responsive layouts, ensuring seamless user experience across various screen sizes and devices,',
      'Implemented secure phone authentication system using Firebase, creating a fast OTP-based authentication mechanism that reduced sign-in time to under 30 seconds.',
      'Enhanced app quality through systematic testing methodologies and feature improvements, resulting in increased application stability and user satisfaction.',
    ],
  },
  {
    title: 'Research Intern',
    company: 'Department of Computer Science, NIT Warangal',
    duration: ' Jun 2023 - Jul 2023',
    description: [
      'Conducted research on graph theory problems, specifically focusing on the Secure Domination Problem, an NP-hard optimization challenge.',
      'Developed and implemented a genetic algorithm-based solution to address the Secure Domination Problem, contributing to the field of meta-heuristic algorithms.',
      'Successfully presented research findings at the International Conference on Applied Mathematics and Mechanics (ICAMM 2023).',
    ],
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Professional Experience">
      <div className="timeline-container">
        {experienceData.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="duration">{exp.duration}</p>
              <ul>
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;
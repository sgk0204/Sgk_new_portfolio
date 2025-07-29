// client/src/pages/Skills.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Skills.css';

const skillsData = [
  'C++', 'Java', 'C', 'Python',
  'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Flutter',
  'Node.js', 'Express.js', 'RESTful APIs',
  'SQL', 'MongoDB', 'Firebase', 'MySQL',
  'Git', 'GitHub', 'VS Code', 'Render', 'PowerBI',
  'Artificial Intelligence', 'Natural Language Processing', 'Applied Machine Learning',
  'Object Oriented Programming', 'Data Structures & Algorithms', 
  'Database Management Systems', 'Operating Systems', 'Computer Networks'
];

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="skills-container">
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
// client/src/pages/Skills.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Skills.css';

const skillsData = {
  'Programming Languages': [
    { name: 'C++', level: 'Advanced' },
    { name: 'Java', level: 'Advanced' },
    { name: 'C', level: 'Advanced' },
    { name: 'Python', level: 'Intermediate' },
    
  ],
  'Frontend': [
    { name: 'HTML5', level: 'Advanced' },
    { name: 'CSS3', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React.js', level: 'Intermediate' },
    { name: 'Flutter', level: 'Intermediate' },

  ],
  'Backend': [
    { name: 'Node.js', level: 'Advanced' },
    { name: 'Express.js', level: 'Intermediate' },
    { name: 'RESTful APIs', level: 'Intermediate' },
  ],
  'Database': [
    { name: 'SQL', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },
    { name: 'Firebase', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
  ],
  'Tools & Others': [
    { name: 'Git', level: 'Advanced' },
    { name: 'GitHub', level: 'Advanced' },
    { name: 'VS Code', level: 'Advanced' },
    { name: 'Render', level: 'Intermediate'},
    {name: 'PowerBI', level: 'Basic'},
  ],
  'coursework': [
    { name: 'AI', level: '' },
    { name: 'NLP', level: '' },
    {name:'Applied Machine Learning',level:''},
    { name: 'OOPS', level: '' },
    { name: 'DSA', level: ''},
    {name:'DBMS',level:''},
    {name:'Operating Systems',level:''},
    {name:'Computer Networks',level:''},
  ],
};

const Skills = () => {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="skills-container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div className="skills-category" key={category}>
            <h3>{category}</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <span className="skill-name">{skill.name}</span>
                  <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
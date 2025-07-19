// client/src/pages/Hobbies.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Hobbies.css';
// You might use icon libraries like Font Awesome or simply emojis
// import { FaBook, FaHiking, FaCode } from 'react-icons/fa'; // Example

const hobbiesData = [
  {
    name: 'Reading',
    description: 'Exploring new worlds through books.',
    icon: '📚' // or <FaBook />
  },
  {
    name: 'Batmition',
    description: 'Playing batminton for fun and fitness.',
    icon: '🏸' // or <FaHiking />
  },
  {
    name: 'Designing',
    description: 'Creating designs to events and competitions.',
    icon: '🎨' // or <FaCode />
  },
];

const Hobbies = () => {
  return (
    <SectionWrapper id="hobbies" title="Hobbies & Interests">
      <div className="hobbies-grid">
        {hobbiesData.map((hobby, index) => (
          <div className="hobby-card" key={index}>
            <span className="hobby-icon">{hobby.icon}</span>
            <h3>{hobby.name}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Hobbies;
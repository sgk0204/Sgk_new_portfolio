// client/src/pages/Achievements.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Achievements.css'; // Component-specific CSS

const achievementsData = [
  {
    id: 1,
    title: 'Research Recognition',
    year: 2023,
    description: 'Received outstanding 4/5 review rating for research paper presentation at ICAMM 2023',
  },
  {
    id: 2,
    title: 'JEE Mains',
    year: 2021,
    description: 'Ranked 1st in school and achieved top 1% nationwide ranking.',
  },
  {
    id: 3,
    title: 'AP EAPCET ',
    year: 2021,
    description: 'Secured position in top 1% of state-level engineering entrance examination.',
  },
  {
    id: 4,
    title: 'AMTI Mathematics',
    year: 2015,
    description: 'Achieved 1st place at regional level, demonstrating exceptional mathematical aptitude',
  },
];

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" title="Achievements & Awards">
      <div className="achievements-grid">
        {achievementsData.map((achievement) => (
          <div className="achievement-card" key={achievement.id}>
            <div className="achievement-icon">🏆</div> {/* You can replace with an actual icon */}
            <h3>{achievement.title}</h3>
            <span className="achievement-year">{achievement.year}</span>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
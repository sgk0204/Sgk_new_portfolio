// client/src/pages/Volunteering.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Volunteering.css'; // Component-specific CSS (can share some with EducationExperience.css)

const volunteeringData = [
  {
    id: 1,
    role: 'Executive Member (Designer)',
    organization: 'Graphic Cafe, NIT Andhra Pradesh',
    duration: 'Sep 2023 - Jul 2024',
    description: [
      'Served as executive member responsible for graphic design and visual communication.',
      'Created engaging visual content for college events, workshops, and promotional materials.',
      'Collaborated with team members to organize design workshops and creative sessions.',
      'Mentored junior students in graphic design principles and digital art techniques.',
    ],
  },
  {
    id: 2,
    role: 'Volunteer (Designer)',
    organization: 'CSE Association, NIT Andhra Pradesh',
    duration: 'Aug 2022 - Sep 2023',
    description: [
      'Contributed as volunteer designer for the Computer Science and Engineering department association.',
      'Designed posters, banners, and digital content for technical events and seminars.',
      'Supported event organization and promotion through creative visual solutions.',
    ],
  },
];

const Volunteering = () => {
  return (
    <SectionWrapper id="volunteering" title="Volunteering Experience">
      <div className="volunteering-timeline-container">
        {volunteeringData.map((vol, index) => (
          <div className="volunteering-timeline-item" key={vol.id}>
            <div className="volunteering-timeline-dot"></div>
            <div className="volunteering-timeline-card">
              <h3>{vol.role}</h3>
              <h4>{vol.organization}</h4>
              <p className="volunteering-duration">{vol.duration}</p>
              <ul>
                {vol.description.map((item, i) => (
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

export default Volunteering;
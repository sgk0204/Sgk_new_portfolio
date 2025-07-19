// client/src/pages/Publications.js
import React from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Publications.css'; // Component-specific CSS

const publicationsData = [
  {
    id: 1,
    conferenceName: 'International Conference on Applied Mathematics and Mechanics (ICAMM 2023)',
    paperTitle: 'Genetic Algorithm for the Secure Domination Problem',
    authors: 'Sista Gopala Krishna, P Venkata Subba Reddy',
    publicationLink: '', // Link to paper on IEEE Xplore, ACM Digital Library, ArXiv, personal site, etc.
    year: 2023,
  },
];

const Publications = () => {
  return (
    <SectionWrapper id="publications" title="Publications & Research">
      <div className="publications-list">
        {publicationsData.map((pub) => (
          <div className="publication-item" key={pub.id}>
            <div className="publication-header">
              <h3>{pub.paperTitle}</h3>
              <span className="publication-year">{pub.year}</span>
            </div>
            <p className="publication-conference">{pub.conferenceName}</p>
            <p className="publication-authors">Authors: {pub.authors}</p>
            {pub.publicationLink && (
              <a
                href={pub.publicationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="publication-link-button"
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Publications;
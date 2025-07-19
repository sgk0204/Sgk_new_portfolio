// client/src/components/SectionWrapper.js
import React from 'react';
import './SectionWrapper.css';

const SectionWrapper = ({ id, title, children }) => {
  return (
    <section id={id} className="section-wrapper">
      <div className="section-content">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
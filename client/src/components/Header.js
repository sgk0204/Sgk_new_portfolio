// client/src/components/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css'; // Component-specific CSS

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <div className="logo">
          <a href="#home" onClick={() => smoothScroll('home')}>Sista Gopala Krishna</a>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><a href="#about" onClick={() => smoothScroll('about')}>About</a></li>
            <li><a href="#education" onClick={() => smoothScroll('education')}>Education</a></li>
            <li><a href="#experience" onClick={() => smoothScroll('experience')}>Experience</a></li>
            <li><a href="#projects" onClick={() => smoothScroll('projects')}>Projects</a></li>
            <li><a href="#skills" onClick={() => smoothScroll('skills')}>Skills</a></li>
            <li><a href="#contact" onClick={() => smoothScroll('contact')}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
// client/src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Publications from './pages/Publications'; // New import
import Achievements from './pages/Achievements'; // New import
import Volunteering from './pages/Volunteering'; // New import
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

// Optional: For smooth scroll animations on section entry
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// useEffect(() => {
//   AOS.init({ duration: 1000 });
// }, []);

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Publications /> {/* Add the new section here */}
        <Achievements /> {/* Add the new section here */}
        <Volunteering /> {/* Add the new section here */}
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
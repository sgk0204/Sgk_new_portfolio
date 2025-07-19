// client/src/pages/Projects.js
import React, { useState, useEffect } from 'react';
import SectionWrapper from '../components/SectionWrapper';
import './Projects.css';
import axios from 'axios'; // Ensure you have axios installed: npm install axios

// Import placeholder images for your projects.
// Make sure to replace these with actual screenshots or relevant images
// located in client/src/assets/ (or a similar path).
import placeholderProjectImg from '../assets/profile.jpg'; // Create or use a generic image
import placeholderProjectImg1 from '../assets/project1.jpg';
import placeholderProjectImg2 from '../assets/project2.jpg';
import placeholderProjectImg3 from '../assets/project3.png';
import placeholderProjectImg4 from '../assets/project4.jpg';
import placeholderProjectImg5 from '../assets/project5.png';
import placeholderProjectImg6 from '../assets/project6.png';
// You might consider adding specific images for each project:
// import geneticAlgorithmImg from '../assets/genetic-algorithm.jpg';
// import phishingDetectionImg from '../assets/phishing-detection.jpg';
// import realEstateAppImg from '../assets/real-estate-app.jpg';

const Projects = () => {
  // We'll initially use static data. For a full MERN app,
  // you'd fetch this from your backend as discussed previously.
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false); // Set to true if fetching from backend
  const [error, setError] = useState(null); // Set to error message if fetching from backend

  // --- Static Project Data (Replace or use with API fetch) ---
  // If you want to use the backend, comment out this static data and uncomment
  // the useEffect hook below. For now, we'll start with static for immediate display.
  const staticProjectsData = [
    {
      id: 1, // Unique ID
      title: 'Genetic Algorithm and PSO for Secure Domination Number Calculation',
      description: 'Designed and implemented meta-heuristic algorithms for solving the NP-hard Secure Domination problem in graph theory. Optimized algorithm performance using Genetic Algorithm and Particle Swarm Optimization techniques across nearly 200 different graph instances. Achieved results consistently below theoretical upper bounds on random graphs including Erdos-Renyi and Harwell-Boeing datasets over 50,000 and 100,000 iterations. Demonstrated significant algorithm efficiency improvements compared to traditional approaches.',
      image: placeholderProjectImg1, // Replace with actual image for this project
      liveDemoUrl: null, // No live demo provided in your LaTeX, so set to null or remove if not applicable
      githubRepoUrl: 'https://github.com/sgk0204/Genetic-and-PSO-algorithum-for-secure-domination-number',
      technologies: ['Algorithms', 'Python', 'Graph Theory'],
    },
    {
      id: 2,
      title: 'Phishing URL Detection System',
      description: 'Developed an intelligent machine learning model for detecting fraudulent website links and phishing attempts. Implemented feature extraction and analysis of 15 critical URL characteristics including domain name patterns, IP address analysis, and URL structure. Achieved 81% accuracy score using Random Forest and Decision Tree classifiers, providing reliable phishing detection. Created user-friendly web interface for real-time URL analysis and threat detection',
      image: placeholderProjectImg2, // Replace with actual image for this project
      liveDemoUrl: null,
      githubRepoUrl: 'https://github.com/sgk0204/Phishing_Url_Detection',
      technologies: ['Python', 'HTML', 'CSS', 'Machine Learning', 'Pandas', 'Numpy', 'Random Forest Classifier', 'Decision Tree Classifier'],
    },
    {
      id: 3,
      title: 'Real Estate Web Application',
      description: 'Developed a comprehensive real estate platform using modern MERN stack technologies with advanced functionality. Engineered complete CRUD operations enabling users to create, update, and manage property listings with multi-image uploads and dynamic pricing. Implemented robust authentication system using JWT and Google OAuth for secure user management. Deployed scalable application on Render with responsive design optimized for both desktop and mobile platforms. Integrated advanced search and filtering capabilities for enhanced user experience',
      image: placeholderProjectImg3, // Replace with actual image for this project
      liveDemoUrl: 'https://sg-estate.onrender.com/',
      githubRepoUrl: 'https://github.com/sgk0204/SG-Estate', // Assuming this is the repo, update if different
      technologies: ['ReactJS', 'JavaScript', 'MongoDB', 'NodeJS', 'ExpressJS', 'Tailwind CSS'],
    },
    {
      id: 4,
      title: 'ChatApp',
      description: 'Developed a cross-platform group chat app using Flutter and Firebase, supporting real-time messaging and group management on Android, iOS, and web with secure email/password authentication. Integrated Firebase Authentication and Cloud Firestore for real-time backend operations with secure CRUD functionality and optimized Firestore rules. Built a responsive UI with StreamBuilder and managed session persistence using Shared Preferences for a seamless user experience.',
      image: placeholderProjectImg4, // Replace with actual image for this project
      liveDemoUrl: 'https://sgk-portfolio.vercel.app/app-release.apk',
      githubRepoUrl: 'https://github.com/sgk0204/ChatApp', // Assuming this is the repo, update if different
      technologies: ['Flutter', 'Firebase'],
    },
    {
      id: 5,
      title: 'Blogging website',
      description: 'Built a full-stack MERN blog application with JWT authentication, RESTful APIs, and responsive React frontend featuring CRUD operations and file uploads.',
      image: placeholderProjectImg5, // Replace with actual image for this project
      liveDemoUrl: 'https://sgks-blog.onrender.com/',
      githubRepoUrl: 'https://github.com/sgk0204/sgks-blog', // Assuming this is the repo, update if different
      technologies: ['ReactJS', 'JavaScript', 'MongoDB', 'NodeJS', 'ExpressJS', 'Tailwind CSS'],
    },
    {
      id: 6,
      title: 'Basic Math Game',
      description: 'Speed Math Challenge is a fast-paced, time-based mathematical quiz game built using the MERN stack. The game tests players arithmetic skills across four fundamental operations while challenging them to achieve the highest score possible within limited time frames.',
      image: placeholderProjectImg6, // Replace with actual image for this project
      liveDemoUrl: 'https://math-game-kohl.vercel.app/',
      githubRepoUrl: 'https://github.com/sgk0204/MathGame', // Assuming this is the repo, update if different
      technologies: ['ReactJS', 'JavaScript', 'MongoDB', 'NodeJS', 'ExpressJS', 'Tailwind CSS'],
    },
    
    // Add more projects here if you have them
  ];
  // --- End Static Project Data ---

  useEffect(() => {
    // For now, we'll use static data for quick demonstration.
    // Uncomment and modify the fetch logic below when your backend is ready.
    setProjects(staticProjectsData);
    setLoading(false);

    /*
    // --- Uncomment this block to fetch from your MERN backend ---
    const fetchProjects = async () => {
      try {
        setLoading(true);
        // Replace with your actual backend API URL for projects
        const response = await axios.get(process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1/projects');
        setProjects(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
        setLoading(false);
        console.error('Error fetching projects:', err);
      }
    };
    fetchProjects();
    // --- End backend fetch block ---
    */
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return <SectionWrapper id="projects" title="My Projects"><div>Loading projects...</div></SectionWrapper>;
  }

  if (error) {
    return <SectionWrapper id="projects" title="My Projects"><div>Error: {error}</div></SectionWrapper>;
  }

  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="projects-grid">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div className="project-card" key={project.id}> {/* Use project.id or project._id if from MongoDB */}
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-details">
                <h3>{project.title}</h3>
                {/* Displaying description as a single paragraph. If you want bullet points,
                    you'd need to parse the description or store it as an array in data. */}
                <p>{project.description}</p>
                <div className="project-tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo</a>
                  )}
                  {project.githubRepoUrl && (
                    <a href={project.githubRepoUrl} target="_blank" rel="noopener noreferrer" className="project-link github-link">GitHub</a>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No projects to display yet. Check back soon!</p>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
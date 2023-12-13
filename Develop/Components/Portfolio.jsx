// Portfolio.js or Portfolio.jsx
import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'What to Watch',
      deployedLink: 'https://trlivenp.github.io/What_to_Watch',
      repoLink: 'https://github.com/trlivenp/What_to_Watch',
      imageSrc: '',
    },
    {
      title: 'Random Password Generator',
      deployedLink: 'https://trlivenp.github.io/Random-Password-Generator',
      repoLink: 'https://github.com/trlivenp/Random-Password-Generator',
      imageSrc: '../public/RandomPasswordGenerator.png',
    },
    {
      title: 'Next Level Fitness',
      deployedLink: 'https://next-level-fitness.onrender.com/',
      repoLink: 'https://github.com/2dogsandaguy/Code-war-2',
    },
    {
      title: 'ReadMe Generator',
      repoLink: 'https://github.com/trlivenp/ReadMe_Generator',
    },
    {
      title: 'Note Taker',
      deployedLink: 'https://note-taker-tkl-3241843d1ca7.herokuapp.com/',
      repoLink: 'https://github.com/trlivenp/Note-Taker',
    },
    {
      title: 'Weather Dashboard',
      deployedLink: 'https://trlivenp.github.io/weather_dashboard/',
      repoLink: 'https://github.com/trlivenp/Weather_Dashboard',
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-list">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            {project.deployedLink && (
              <p>
                <strong>Deployed:</strong>{' '}
                <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                  {project.deployedLink}
                </a>
              </p>
            )}
            {project.repoLink && (
              <p>
                <strong>Repository:</strong>{' '}
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  {project.repoLink}
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;


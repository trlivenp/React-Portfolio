// Resume.js or Resume.jsx
import React from 'react';

const Resume = () => {
  const resumeUrl = "https://github.com/trlivenp/React-Portfolio/blob/main/Tristan-Livengood%20React%2012.11.23.pdf"; // Replace with your actual link
  
  return (
    <section>
      <h2>Resume</h2>
      <p>Download my resume: <a href={resumeUrl} target="_blank" rel="noopener noreferrer">Resume</a></p>
      {/* List of developer's proficiencies */}
    </section>
  );
};

export default Resume;

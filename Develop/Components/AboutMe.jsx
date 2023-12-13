// AboutMe.js or AboutMe.jsx
import React from 'react';

// Import your photo from the public folder
import myPhoto from '../../public/Portfolio_Profile_img.png'; // Replace with your actual photo file name

const AboutMe = () => {
  const summary = `Hi, my name is Tristan Livengood. I am currently an Area Manager at ACY5, an Amazon Sortation Center. I am 23 years old and have grown up with a great work ethic. Since I was old enough to push a lawnmower, I have worked with my Father's Lawn and Landscaping business. I have also worked at a summer camp in 2018 as Head Lifeguard and Maintenance. I am a natural people leader. While I do not have a specific goal as a web developer, whether freelancing or working in a large company, I aspire to climb the ladder and have my own team.`;

  return (
    <section>
      <h2>About Me</h2>
      <div className="about-me-content">
        <img src={myPhoto} alt="Tristan Livengood" className="profile-photo" />
        <p>{summary}</p>
      </div>
    </section>
  );
};

export default AboutMe;


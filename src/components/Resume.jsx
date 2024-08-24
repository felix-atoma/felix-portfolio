import React from 'react';
import { FaGraduationCap, FaBriefcase, FaLanguage } from 'react-icons/fa';

const Resume = () => {
  // Inline style objects
  const sectionStyle = {
    backgroundColor: '#ffffff', // Set background to white
    padding: '3rem 1.5rem',
    '@media (min-width: 768px)': {
      padding: '3rem 5rem',
    },
    '@media (min-width: 1024px)': {
      padding: '3rem 10rem',
    },
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '0.5rem',
    padding: '2rem',
  };

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: '2.5rem',
    textAlign: 'center',
  };

  const sectionHeaderStyle = {
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#96BB7C', // Light green
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconStyle = {
    marginRight: '0.5rem',
    color: '#FFA500', // Orange for icons
  };

  const subsectionStyle = {
    marginBottom: '2.5rem',
  };

  const contentStyle = {
    marginBottom: '1.5rem',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#96BB7C', // Light green
  };

  const paragraphStyle = {
    color: '#6b7280',
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '1.25rem',
    color: '#6b7280',
    textAlign: 'left',
    display: 'inline-block',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={titleStyle}>Resume</h1>

        {/* Achievement Note */}
        <div style={subsectionStyle}>
          <p style={paragraphStyle}>
            Trained as a frontend web developer at MEST Africa, where I was recognized as one of the three students who showed significant growth, persistence, and commitment despite challenges.
          </p>
        </div>

        {/* Education Section */}
        <div style={subsectionStyle}>
          <h2 style={sectionHeaderStyle}>
            <FaGraduationCap style={iconStyle} /> Education
          </h2>
          <div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>M.A. Candidate in Conference Interpreting</h3>
              <p style={paragraphStyle}>University of Ghana, Starting October 2024</p>
            </div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>B.A. in English Literature</h3>
              <p style={paragraphStyle}>Université de Lomé, July 2012</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div style={subsectionStyle}>
          <h2 style={sectionHeaderStyle}>
            <FaBriefcase style={iconStyle} /> Professional Experience
          </h2>
          <div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>Frontend Developer</h3>
              <p style={paragraphStyle}>MEST Africa</p>
              <ul style={listStyle}>
                <li>Developed user interfaces and components using React and Tailwind CSS.</li>
              </ul>
            </div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>App Developer</h3>
              <p style={paragraphStyle}>Corextreme</p>
              <ul style={listStyle}>
                <li>Built Pusham App to notify Cameroonian electricity users about potential blackouts.</li>
              </ul>
            </div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>Co-Founder and Developer</h3>
              <p style={paragraphStyle}>FarmConnect App</p>
              <ul style={listStyle}>
                <li>Collaborated with a backend partner to develop an app bridging the gap between farmers and customers.</li>
              </ul>
            </div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>Frontend Developer</h3>
              <p style={paragraphStyle}>Event App</p>
              <ul style={listStyle}>
                <li>Worked in a team of four to build an event management app.</li>
              </ul>
            </div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>Frontend Developer</h3>
              <p style={paragraphStyle}>Portfolio App</p>
              <ul style={listStyle}>
                <li>Worked in a team of four to build a portfolio app.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Language Skills Section */}
        <div style={subsectionStyle}>
          <h2 style={sectionHeaderStyle}>
            <FaLanguage style={iconStyle} /> Language Skills
          </h2>
          <div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>Translator</h3>
              <p style={paragraphStyle}>Freelance</p>
              <ul style={listStyle}>
                <li>Translated documents from French to English and English to French.</li>
              </ul>
            </div>
            <div style={contentStyle}>
              <h3 style={headingStyle}>Language Instructor</h3>
              <p style={paragraphStyle}>Ecole Saint Pierre Claver, Accra</p>
              <ul style={listStyle}>
                <li>Taught English to Francophone students from 2012 to the present.</li>
                <li>Taught French to Anglophone students from 2012 to the present.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

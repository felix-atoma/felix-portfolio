import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/1W7A3821.jpg';
const cvFile = '/Felix_Atoma_CV_Cleaned';

const skills = [
  { name: 'Tailwind CSS', percentage: 90 },
  { name: 'React Native Expo', percentage: 85 }, // Added React Native Expo
  { name: 'TypeScript', percentage: 65 },        // Added TypeScript at 65%
  { name: 'UI/UX Design', percentage: 85 },
  { name: 'JavaScript', percentage: 70 },        // Updated JavaScript to 70%
  { name: 'Bootstrap', percentage: 92 },
  { name: 'CSS', percentage: 97 },
  { name: 'HTML', percentage: 98 },
  { name: 'Git', percentage: 85 },
  { name: 'GitHub', percentage: 80 },
  { name: 'React.js', percentage: 80 },
  { name: 'Next.js', percentage: 80 },
];

const About = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate('/contact');
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'row', padding: '24px', gap: '24px', flexWrap: 'wrap', backgroundColor: '#FFFFFF' }}>
      {/* Image Section */}
      <div style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={profileImage}
          alt="Profile of Felix Atoma"
          style={{ width: '100%', maxWidth: '400px', height: 'auto', objectFit: 'cover' }}
        />
      </div>

      {/* Bio and Skills Section */}
      <div style={{ flex: '2', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'grid', gap: '20px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 'bold', color: '#000000' }}>My Bio</h1>
          <p style={{ color: '#000000', fontSize: '16px' }}>
            With a deep understanding of Tailwind CSS, UI/UX design, JavaScript, Bootstrap, CSS, HTML, Git, GitHub, React.js, and Next.js,
            I specialize in crafting visually stunning and highly functional web interfaces. My expertise lies in seamlessly 
            integrating design aesthetics with robust front-end development, ensuring that every project not only looks exceptional
            but also provides an intuitive user experience. I am passionate about leveraging modern web technologies to build 
            responsive, accessible, and user-centric applications that stand out in a competitive digital landscape. My proficiency
            in these areas allows me to transform ideas into engaging, interactive, and visually appealing web solutions that meet 
            the needs of both users and businesses.
          </p>
        </div>

        {/* Skills Section */}
        <div style={{ paddingTop: '24px' }}>
          {skills.map((skill) => (
            <div key={skill.name} style={{ marginBottom: '16px' }}>
              <h2 style={{ fontSize: '16px', color: '#000000' }}>{skill.name}</h2>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px', position: 'relative' }}>
                <div style={{ height: '4px', backgroundColor: '#e0e0e0', width: '100%', borderRadius: '4px' }}></div>
                <div
                  style={{
                    height: '4px',
                    backgroundColor: skill.percentage > 75 ? '#90EE90' : '#FFA500', // Light green or orange based on percentage
                    position: 'absolute',
                    width: `${skill.percentage}%`,
                    borderRadius: '4px',
                  }}
                ></div>
                <span style={{ position: 'absolute', right: '0', fontSize: '12px', color: '#000000' }}>
                  {skill.percentage}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons Section */}
        <div style={{ paddingTop: '24px', display: 'flex', flexDirection: 'row', gap: '16px' }}>
          <button 
            onClick={handleHireMeClick}
            style={{
              padding: '8px 16px',
              border: '2px solid',
              borderRadius: '24px',
              backgroundColor: '#90EE90', // Light green
              color: '#000000',
              cursor: 'pointer',
              border: 'none',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#6DBF4F'; // Darker green on hover
              e.currentTarget.style.color = '#FFFFFF'; // White text on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#90EE90'; // Light green
              e.currentTarget.style.color = '#000000'; // Black text
            }}
          >
            Hire Me
          </button>
          <a
            href={cvFile} 
            download 
            style={{
              padding: '8px 16px',
              border: '2px solid',
              borderRadius: '24px',
              backgroundColor: '#FFA500', // Orange
              color: '#000000',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '16px',
              fontWeight: 'bold',
              transition: 'background-color 0.3s, color 0.3s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#FF8C00'; // Darker orange on hover
              e.currentTarget.style.color = '#FFFFFF'; // White text on hover
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#FFA500'; // Orange
              e.currentTarget.style.color = '#000000'; // Black text
            }}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

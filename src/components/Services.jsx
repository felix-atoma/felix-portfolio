import React from 'react';
import { FaDesktop, FaMobileAlt, FaLanguage, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

const services = [
  {
    id: 1,
    icon: <FaDesktop size={48} />,
    title: 'Responsive Websites',
    description: 'Building responsive and modern websites with the latest web technologies to ensure they look great on all devices.',
  },
  {
    id: 2,
    icon: <FaMobileAlt size={48} />,
    title: 'Mobile Apps',
    description: 'Creating mobile applications with user-friendly interfaces and smooth performance across different platforms.',
  },
  {
    id: 3,
    icon: <FaLanguage size={48} />,
    title: 'Translation',
    description: 'Providing high-quality translation services between French and English, for various types of content.',
  },
  {
    id: 4,
    icon: <FaChalkboardTeacher size={48} />,
    title: 'Language Teaching',
    description: 'Offering professional language teaching services with a focus on French and English languages.',
  },
  {
    id: 5,
    icon: <FaBriefcase size={48} />,
    title: 'Portfolio Building',
    description: 'Helping individuals and professionals build compelling portfolios to showcase their skills and achievements.',
  },
];

const Services = () => {
  // Color scheme
  const colors = {
    lightGreen: '#96BB7C',
    orange: '#F7931E',
    white: '#FFFFFF',
    grayText: '#666666',
    darkText: '#000000',
  };

  // Inline style objects
  const sectionStyle = {
    padding: '2.5rem 1.5rem',
    backgroundColor: colors.white,
  };

  const headingStyle = {
    fontSize: '2.25rem',
    fontWeight: 'bold',
    color: colors.darkText,
    marginBottom: '1.25rem',
  };

  const paragraphStyle = {
    fontSize: '1.125rem',
    color: colors.grayText,
  };

  const gridStyle = {
    display: 'grid',
    gap: '2.5rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
  };

  const cardStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '2rem',
    border: `1px solid ${colors.lightGreen}`,
    borderRadius: '0.5rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    backgroundColor: colors.white,
    transition: 'transform 0.3s ease',
    transform: 'scale(1)',
  };

  const iconStyle = {
    color: colors.lightGreen,
    marginBottom: '1rem',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: colors.orange,
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    color: colors.grayText,
  };

  return (
    <section style={sectionStyle}>
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2 style={headingStyle}>My Services</h2>
        <p style={paragraphStyle}>
          I offer a range of services to help you achieve your goals, whether it's developing a website, translating content, or building a professional portfolio.
        </p>
      </div>

      <div style={gridStyle}>
        {services.map(service => (
          <div
            key={service.id}
            style={cardStyle}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <div style={iconStyle}>{service.icon}</div>
            <h3 style={titleStyle}>{service.title}</h3>
            <p style={descriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

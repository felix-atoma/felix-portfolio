import React, { useState } from 'react';
import { FaDesktop, FaMobileAlt, FaFolderOpen, FaLanguage, FaChalkboardTeacher, FaBriefcase } from 'react-icons/fa';

// Utility function to create a hoverable card style
const cardStyle = (hover, colors) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1.5rem',
  border: `1px solid ${colors.border}`,
  borderRadius: '0.5rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  backgroundColor: hover ? colors.hoverBackground : colors.background,
  transition: 'transform 0.3s ease',
  cursor: 'pointer',
  transform: hover ? 'scale(1.05)' : 'scale(1)',
});

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredItemId, setHoveredItemId] = useState(null);

  // Define your colors
  const colors = {
    green: '#96BB7C',
    orange: '#F7931E',
    white: '#FFFFFF',
    border: '#ddd',
    background: '#FFFFFF',
    hoverBackground: '#F0F0F0',
    text: '#000000',
    hoverText: '#FFFFFF',
  };

  // Example portfolio items with icons
  const items = [
    { id: 1, category: 'All', icon: <FaFolderOpen size={48} />, title: 'All' },
    { id: 2, category: 'Projects', icon: <FaDesktop size={48} />, title: 'Responsive Websites' },
    { id: 3, category: 'Experience', icon: <FaMobileAlt size={48} />, title: 'Mobile Apps' },
    { id: 4, category: 'Translation', icon: <FaLanguage size={48} />, title: 'French and English Translation' },
    { id: 5, category: 'Language Teaching', icon: <FaChalkboardTeacher size={48} />, title: 'Language Teaching' },
    { id: 6, category: 'Portfolio Building', icon: <FaBriefcase size={48} />, title: 'Portfolio Building' }
  ];

  // Filter items based on the active category
  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory);

  return (
    <section style={{ padding: '1rem', '@media (min-width: 768px)': { padding: '2.5rem' }, '@media (min-width: 1024px)': { padding: '5rem' } }}>
      {/* Portfolio Title and Navigation */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem', '@media (min-width: 768px)': { marginBottom: '2.5rem' } }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: colors.text }}>
          My Portfolio
        </h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.75rem' }}>
          {['All', 'Projects', 'Experience', 'Translation', 'Language Teaching', 'Portfolio Building'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              style={{
                fontSize: '0.875rem',
                color: colors.green,
                textDecoration: 'none',
                background: 'none',
                border: 'none',
                fontWeight: activeCategory === category ? 'bold' : 'normal',
                textDecoration: activeCategory === category ? 'underline' : 'none',
                cursor: 'pointer',
                '@media (min-width: 768px)': { fontSize: '1rem' },
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Portfolio Grid */}
      <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(1, 1fr)', '@media (min-width: 640px)': { gridTemplateColumns: 'repeat(2, 1fr)' }, '@media (min-width: 1024px)': { gridTemplateColumns: 'repeat(3, 1fr)' } }}>
        {filteredItems.map(item => (
          <div
            key={item.id}
            style={cardStyle(hoveredItemId === item.id, colors)}
            onMouseEnter={() => setHoveredItemId(item.id)}
            onMouseLeave={() => setHoveredItemId(null)}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', color: colors.green, marginBottom: '0.5rem', '@media (min-width: 768px)': { fontSize: '3rem' } }}>
                {item.icon}
              </div>
              <h2 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: hoveredItemId === item.id ? colors.hoverText : 'transparent', transition: 'color 0.3s ease' }}>
                {item.title}
              </h2>
            </div>
            <div style={{
              position: 'absolute',
              inset: '0',
              backgroundColor: colors.orange,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: hoveredItemId === item.id ? '1' : '0',
              transition: 'opacity 0.3s ease',
              color: colors.white,
              textAlign: 'center',
              fontSize: '1.125rem',
              fontWeight: 'bold',
            }}>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

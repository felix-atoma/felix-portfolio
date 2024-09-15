import React from 'react';

const Blog = ({ posts }) => {
  // Define inline styles for blog container and cards
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
    padding: '20px',
  };

  const cardStyle = {
    backgroundColor: '#fff', // White background
    border: '1px solid #E2E8F0',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '24px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#2D3748', // Dark gray
  };

  const dateStyle = {
    color: '#718096', // Lighter gray
    fontSize: '14px',
    marginBottom: '10px',
  };

  const excerptStyle = {
    color: '#4A5568', // Medium gray
  };

  const cardContentStyle = {
    backgroundColor: '#F7FAFC', // Light gray background for card content
    border: '2px solid #71B34A', // Light green border
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
  };

  const hoverCardContentStyle = {
    backgroundColor: '#F7931E', // Orange background on hover
    color: '#FFFFFF', // White text on hover
  };

  const mainTitleStyle = {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '40px',
    color: '#2D3748', // Dark gray for the main title
  };

  return (
    <div style={{ padding: '40px' }}>
      {/* Main Title */}
      <h1 style={mainTitleStyle}>My Blog</h1>

      {/* Blog posts grid */}
      <div style={gridStyle}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = hoverStyle.transform;
              e.currentTarget.style.boxShadow = hoverStyle.boxShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            <h2 style={titleStyle}>{post.title}</h2>
            <p style={dateStyle}>
              {post.date} by {post.author}
            </p>
            <p style={excerptStyle}>{post.excerpt}</p>

            {/* Display content in hoverable cards */}
            <div>
              {/* First Card: Vite */}
              <div
                style={cardContentStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverCardContentStyle.backgroundColor;
                  e.currentTarget.style.color = hoverCardContentStyle.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = cardContentStyle.backgroundColor;
                  e.currentTarget.style.color = '';
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Vite: Lightning-Fast Builds</h3>
                <p>
                  Vite is a next-generation build tool that leverages native ES modules for faster hot module replacement (HMR).
                </p>
                <ul>
                  <li>Fast Development</li>
                  <li>Optimized Production Builds</li>
                  <li>Simplicity</li>
                </ul>
              </div>
              {/* Second Card: React */}
              <div
                style={cardContentStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverCardContentStyle.backgroundColor;
                  e.currentTarget.style.color = hoverCardContentStyle.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = cardContentStyle.backgroundColor;
                  e.currentTarget.style.color = '';
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>React: Building Dynamic User Interfaces</h3>
                <p>
                  React’s component-based architecture allows for modular and scalable web applications.
                </p>
                <ul>
                  <li>Component Reusability</li>
                  <li>State Management with Hooks</li>
                  <li>Rich Ecosystem</li>
                </ul>
              </div>
              {/* Third Card: Tailwind CSS */}
              <div
                style={cardContentStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = hoverCardContentStyle.backgroundColor;
                  e.currentTarget.style.color = hoverCardContentStyle.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = cardContentStyle.backgroundColor;
                  e.currentTarget.style.color = '';
                }}
              >
                <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Tailwind CSS: Styling with Ease</h3>
                <p>
                  Tailwind CSS offers a utility-first approach to styling, making it fast and easy to implement design changes.
                </p>
                <ul>
                  <li>Utility-First Styling</li>
                  <li>Customizable</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

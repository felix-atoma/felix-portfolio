import React, { useState } from 'react';

const Blog = ({ posts }) => {
  // Define inline styles
  const sectionStyle = { 
    padding: '40px',
    textAlign: 'center',
    backgroundColor: '#F7F7F7' // Light background for the section
  };
  const titleStyle = { 
    fontSize: '2.5rem', 
    fontWeight: '700', 
    color: '#333333', 
    marginBottom: '40px',
    textTransform: 'uppercase', // Uppercase title for emphasis
    letterSpacing: '1px'
  };
  const articleStyle = {
    backgroundColor: 'white',
    borderRadius: '12px', // Rounded corners for a modern look
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    transition: 'background-color 0.3s, transform 0.3s',
    cursor: 'pointer',
    margin: '0 auto',
    maxWidth: '800px',
    ':hover': {
      backgroundColor: '#FAFAFA',
      transform: 'scale(1.03)'
    }
  };
  const titleTextStyle = { 
    fontSize: '2rem', 
    fontWeight: '700', 
    marginBottom: '16px', 
    color: '#4A4A4A',
    lineHeight: '1.4' // Improved readability
  };
  const excerptStyle = { 
    color: '#555555', 
    marginBottom: '16px',
    fontSize: '1.1rem',
    lineHeight: '1.6' // Improved readability
  };
  const footerStyle = { 
    fontSize: '0.9rem', 
    color: '#777777',
    marginTop: '12px'
  };
  const contentStyle = { 
    marginTop: '20px', 
    lineHeight: '1.8', 
    textAlign: 'left', // Align content to the left for readability
    fontSize: '1.1rem'
  };
  const backButtonStyle = {
    marginTop: '20px',
    padding: '12px 24px',
    backgroundColor: '#71B34A',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: '500',
    transition: 'background-color 0.3s, transform 0.3s',
    ':hover': {
      backgroundColor: '#5a9a3e',
      transform: 'scale(1.05)'
    }
  };

  const [selectedPost, setSelectedPost] = useState(null);

  const handleArticleClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Blog</h1>
      
      {selectedPost ? (
        <article style={articleStyle}>
          <h2 style={titleTextStyle}>{selectedPost.title}</h2>
          <div style={contentStyle}>{selectedPost.content}</div>
          <button 
            onClick={() => setSelectedPost(null)}
            style={backButtonStyle}
          >
            Back to Blog List
          </button>
        </article>
      ) : (
        <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', justifyContent: 'center' }}>
          {posts.map((post) => (
            <article 
              key={post.id} 
              style={articleStyle}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FAFAFA'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              onClick={() => handleArticleClick(post)}
            >
              <h2 style={titleTextStyle}>{post.title}</h2>
              <p style={excerptStyle}>{post.excerpt}</p>
              <div style={footerStyle}>
                <span>By {post.author}</span> | <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;

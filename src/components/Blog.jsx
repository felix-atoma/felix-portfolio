import React from 'react';

const Blog = ({ posts }) => {
  // Define inline styles
  const sectionStyle = { padding: '40px' };
  const titleStyle = { fontSize: '2.25rem', fontWeight: 'bold', textAlign: 'center', color: '#000000', marginBottom: '40px' };
  const articleStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    transition: 'background-color 0.3s',
    cursor: 'pointer'
  };
  const articleHoverStyle = { backgroundColor: '#F9F9F9' };
  const titleTextStyle = { fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#96BB7C' };
  const excerptStyle = { color: '#666666', marginBottom: '16px' };
  const footerStyle = { fontSize: '0.875rem', color: '#999999' };

  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>Blog</h1>
      
      <div style={{ display: 'grid', gap: '40px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
        {posts.map((post) => (
          <article 
            key={post.id} 
            style={articleStyle}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = articleHoverStyle.backgroundColor}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
          >
            <h2 style={titleTextStyle}>{post.title}</h2>
            <p style={excerptStyle}>{post.excerpt}</p>
            <div style={footerStyle}>
              <span>By {post.author}</span> | <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;

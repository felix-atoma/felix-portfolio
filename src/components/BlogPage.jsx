import React from 'react';
import Blog from './Blog';

const BlogPage = () => {
  // Define inline styles
  const containerStyle = { padding: '20px' };
  
  const posts = [
    {
      id: 1,
      title: "Building Responsive Websites with React",
      excerpt: "Learn how to create responsive websites using React and Tailwind CSS...",
      author: "John Doe",
      date: "2024-08-01",
    },
    {
      id: 2,
      title: "Best Practices for Mobile App Development",
      excerpt: "Explore the best practices to keep in mind when developing mobile applications...",
      author: "Jane Smith",
      date: "2024-08-02",
    },
    {
      id: 3,
      title: "Translation Tips for Bilingual Professionals",
      excerpt: "Here are some tips to enhance your translation skills as a bilingual professional...",
      author: "Alex Johnson",
      date: "2024-08-03",
    },
  ];

  return (
    <div style={containerStyle}>
      <Blog posts={posts} />
    </div>
  );
};

export default BlogPage;

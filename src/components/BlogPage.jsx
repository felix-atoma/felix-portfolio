import React from 'react';
import Blog from './Blog';

const BlogPage = () => {
  // Define inline styles
  const containerStyle = { padding: '20px' };
  
  // Sample blog posts data with full content
  const posts = [
    {
      id: 1,
      title: "Leveraging Modern Frontend Technologies for Effective Web Development",
      excerpt: `In today’s rapidly evolving digital landscape, staying ahead of the curve in web development requires not just keeping up with trends, but mastering modern technologies that can streamline development processes and enhance user experiences. As a frontend engineer, I've found that tools like Vite, React, and Tailwind CSS have become invaluable assets in my toolkit. In this post, I’ll share how these technologies have transformed my approach to web development and offer insights into why they might be the right choice for your next project.`,
      content: `### 1. Vite: Lightning-Fast Builds

One of the biggest challenges in frontend development is managing build times and ensuring a smooth development experience. Enter Vite, a next-generation build tool that has significantly improved my workflow. Unlike traditional build tools that rely on bundling and transformations, Vite leverages native ES modules in the browser during development, resulting in faster hot module replacement (HMR) and near-instantaneous feedback.

**Key Benefits of Vite:**
- **Fast Development:** With Vite, you get near-instant server start times and lightning-fast updates during development.
- **Optimized Production Builds:** Vite’s build process is optimized for speed and efficiency, thanks to Rollup under the hood.
- **Simplicity:** Vite’s configuration is straightforward, making it easier to get started without a complex setup.

### 2. React: Building Dynamic User Interfaces

React remains a cornerstone of modern web development due to its component-based architecture and efficient rendering capabilities. By breaking down the UI into reusable components, React allows for a modular and scalable approach to building applications. This component-based structure not only enhances maintainability but also promotes a more organized codebase.

**Why I Choose React:**
- **Component Reusability:** React’s component-based architecture allows me to create reusable and composable components, speeding up development and ensuring consistency.
- **State Management:** With hooks and context, managing state and side effects has become more intuitive and manageable.
- **Rich Ecosystem:** React’s extensive ecosystem, including libraries like React Router and React Query, provides powerful tools to handle routing and data fetching seamlessly.

### 3. Tailwind CSS: Styling with Ease

When it comes to styling, Tailwind CSS has revolutionized how I approach CSS. Its utility-first approach allows for rapid and consistent styling directly within the markup, reducing the need for custom CSS and making it easier to maintain design consistency.

**Advantages of Using Tailwind CSS:**
- **Utility-First:** Tailwind’s utility classes enable quick styling changes and a more streamlined development process.
- **Customizable:** With Tailwind’s configuration, you can easily extend and customize styles to match your design system.
- **Responsive Design:** Tailwind provides responsive utility classes out of the box, making it simple to create responsive designs.

### Conclusion

Integrating Vite, React, and Tailwind CSS into my web development workflow has significantly enhanced my productivity and the quality of my projects. Each tool brings unique benefits to the table, and together they offer a powerful combination for building modern, efficient, and maintainable web applications.

If you’re considering adopting these technologies for your next project, I highly recommend exploring their capabilities. As always, the choice of tools depends on your specific needs and project requirements, but I’ve found that Vite, React, and Tailwind CSS provide a robust foundation for creating cutting-edge web experiences.

Feel free to reach out if you have any questions or if you’d like to discuss how these technologies can be leveraged in your projects.`,
      author: "Felix Atoma",
      date: "2024-09-15",
    },
  ];

  return (
    <div style={containerStyle}>
      <Blog posts={posts} />
    </div>
  );
};

export default BlogPage;

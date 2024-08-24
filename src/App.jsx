import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout'
import Home from './components/Home';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import BlogPage from './components/BlogPage'
import Resume from './components/Resume'
import Contact from './components/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // The layout component that wraps around your routes
    children: [
      { index: true, element: <Home /> }, // Home page or index route
      { path: '/about', element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/services', element: <Services /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/resume', element: <Resume /> },
      { path: '/contact', element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

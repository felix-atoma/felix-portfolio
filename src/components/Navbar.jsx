import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { id: '1', title: 'Home', url: '/' },
    { id: '2', title: 'About', url: '/about' },
    { id: '3', title: 'Portfolio', url: '/portfolio' },
    { id: '4', title: 'Services', url: '/services' },
    { id: '5', title: 'Resume', url: '/resume' },
    { id: '6', title: 'Blog', url: '/blog' },
    { id: '7', title: 'Contact', url: '/contact' }
  ];

  // Inline styles with your color scheme
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#85a76e', // Light green background
  };

  const linkStyle = {
    color: '#FFFFFF', // Default color for links (white)
    textDecoration: 'none',
    fontWeight: '600',
  };

  const activeLinkStyle = {
    color: 'orange', // Orange color for active link
    textDecoration: 'underline',
  };

  const inactiveLinkStyle = {
    color: '#FFFFFF', // White color for inactive links
    opacity: 0.8, // Slightly transparent
    transition: 'color 0.3s',
    ':hover': {
      color: 'orange', // Orange color on hover
    },
  };

  const menuButtonStyle = {
    color: '#FFFFFF',
    fontSize: '1.5rem',
    border: 'none',
    background: 'none',
  };

  const navListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
      gap: '2.5rem', // Equivalent to md:space-x-10
    },
  };

  return (
    <div>
      <section id="navbar" style={navbarStyle}>
        <div>
          <NavLink to="/" style={linkStyle}>
            FA
          </NavLink>
        </div>
        {/* Hamburger Icon for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} style={menuButtonStyle}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        {/* Navigation Links for larger screens */}
        <div
          style={{
            ...navListStyle,
            display: isOpen ? 'block' : 'none',
            '@media (min-width: 768px)': {
              display: 'flex',
            },
          }}
        >
          <ul style={navListStyle}>
            {navLinks.map((link) => (
              <li key={link.id} style={{ marginBottom: '0.5rem' }}>
                <NavLink
                  to={link.url}
                  style={({ isActive }) =>
                    isActive ? activeLinkStyle : inactiveLinkStyle
                  }
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

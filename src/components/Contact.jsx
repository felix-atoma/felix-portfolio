import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API
    setSubmitted(true);
    // Reset form
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  // Inline styles
  const sectionStyle = {
    backgroundColor: '#ffffff',
    padding: '3rem 1.5rem',
    '@media (min-width: 768px)': { padding: '3rem 5rem' },
    '@media (min-width: 1024px)': { padding: '3rem 10rem' },
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: '#f9f9f9', // Light gray background for contrast
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center align items
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#333333',
    marginBottom: '2.5rem',
  };

  const contactInfoStyle = {
    marginBottom: '3rem',
  };

  const infoHeaderStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#96BB7C', // Light green color
    marginBottom: '1.5rem',
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: '#FF6F00', // Orange color
    marginRight: '1rem',
    cursor: 'pointer', // Change cursor to pointer
  };

  const infoTextStyle = {
    color: '#666666',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%', // Make form take full width
    maxWidth: '500px', // Max width to center the form nicely
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#96BB7C', // Light green color
    color: '#ffffff',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#85a76e', // Darker shade of light green
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={headerStyle}>Contact Me</h1>

        <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr', '@media (min-width: 768px)': { gridTemplateColumns: '1fr 1fr' } }}>
          {/* Contact Information */}
          <div style={contactInfoStyle}>
            <h2 style={infoHeaderStyle}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={infoItemStyle}>
                <a href="mailto:felixatoma2@gmail.com" style={iconStyle}>
                  <FaEnvelope />
                </a>
                <p style={infoTextStyle}>felixatoma2@gmail.com</p>
              </div>
              <div style={infoItemStyle}>
                <a href="tel:+233244173068" style={iconStyle}>
                  <FaPhone />
                </a>
                <p style={infoTextStyle}>+233 244173068</p>
              </div>
              <div style={infoItemStyle}>
                <a href="https://wa.me/+233244173068" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <FaWhatsapp />
                </a>
                <p style={infoTextStyle}>Send a WhatsApp message</p>
              </div>
              <div style={infoItemStyle}>
                <a href="https://www.google.com/maps?q=Alajo+High+Street,+Accra,+Ghana" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <FaMapMarkerAlt />
                </a>
                <p style={infoTextStyle}>Alajo High Street, Accra, Ghana</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={infoHeaderStyle}>Get in Touch</h2>
            {submitted ? (
              <p style={{ color: '#4caf50', textAlign: 'center' }}>Thank you for your message! I'll get back to you soon.</p>
            ) : (
              <form onSubmit={handleSubmit} style={formStyle}>
                <div>
                  <label htmlFor="firstName" style={{ display: 'block', color: '#4a5568', marginBottom: '0.5rem' }}>First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" style={{ display: 'block', color: '#4a5568', marginBottom: '0.5rem' }}>Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', color: '#4a5568', marginBottom: '0.5rem' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: 'block', color: '#4a5568', marginBottom: '0.5rem' }}>Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', color: '#4a5568', marginBottom: '0.5rem' }}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    style={inputStyle}
                  />
                </div>
                <button
                  type="submit"
                  style={buttonStyle}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaGithub } from 'react-icons/fa';

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
    // Handle form submission
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
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '0.5rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    color: '#96BB7C',
    marginBottom: '1.5rem',
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const iconStyle = {
    fontSize: '1.5rem',
    color: '#FF6F00', 
    marginRight: '1rem',
    cursor: 'pointer',
  };

  const infoTextStyle = {
    color: '#666666',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    width: '100%',
    maxWidth: '500px',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#96BB7C',
    color: '#ffffff',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#85a76e',
  };

  const gridStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
    '@media (min-width: 768px)': {
      flexDirection: 'row',
    },
  };

  const contactInfoContainerStyle = {
    flex: 1,
  };

  const formContainerStyle = {
    flex: 1,
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={headerStyle}>Contact Me</h1>

        <div style={gridStyle}>
          {/* Contact Information */}
          <div style={contactInfoContainerStyle}>
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
                <a href="https://www.google.com/maps?q=Alajo+High+Street,+Accra,+Ghana+GA-023-9807" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <FaMapMarkerAlt />
                </a>
                <p style={infoTextStyle}>Alajo High Street, Accra, Ghana</p>
              </div>
              <div style={infoItemStyle}>
                <a href="https://github.com/felix-atoma" target="_blank" rel="noopener noreferrer" style={iconStyle}>
                  <FaGithub />
                </a>
                <p style={infoTextStyle}>github.com/felix-atoma</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={formContainerStyle}>
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

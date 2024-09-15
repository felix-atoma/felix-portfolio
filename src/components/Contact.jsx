import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import signingImage from '../assets/signing.png'; // Update path as necessary
import landingBgImage from '../assets/landingBg.png'; // Update path as necessary

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_c0z7aac';  // Your Service ID
    const templateID = 'template_7obdcvs';  // Your Template ID
    const userID = 'Q2qNbFmnIySzNTGul';  // Your Public Key (User ID)

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', phone: '', email: '', subject: '', message: '' });
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  // Styles
  const sectionStyle = {
    backgroundColor: '#ffffff',
    padding: '2rem 1rem',
  };

  const containerStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#333333',
    marginBottom: '2rem',
  };

  const zigzagContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  };

  const zigzagItemStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '1.5rem',
  };

  const infoContainerStyle = {
    flex: 1,
    backgroundColor: '#E7F4E4',
    padding: '1.5rem',
    borderRadius: '0.5rem',
  };

  const formContainerStyle = {
    flex: 1,
    backgroundColor: '#FFE8CC',
    padding: '1.5rem',
    borderRadius: '0.5rem',
  };

  const imageContainerStyle = {
    flex: 1,
    maxWidth: '400px',
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '0.5rem',
  };

  const contactInfoStyle = {
    fontSize: '1rem',
    color: '#666666',
  };

  const infoHeaderStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#96BB7C',
    marginBottom: '1rem',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
  };

  const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #d1d5db',
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
  };

  const buttonStyle = {
    backgroundColor: '#96BB7C',
    color: '#ffffff',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    border: 'none',
    textAlign: 'center',
    fontSize: '0.875rem',
  };

  const buttonHoverStyle = {
    backgroundColor: '#FFA500', // Orange color
  };

  const linkStyle = {
    color: '#666666',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: '1.25rem',
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={headerStyle}>Contact Me</h1>

        <div style={zigzagContainerStyle}>
          {/* First Zigzag Item: Contact Info and Image */}
          <div style={zigzagItemStyle}>
            <div style={infoContainerStyle}>
              <h2 style={infoHeaderStyle}>Contact Information</h2>
              <a href="mailto:felixatoma2@gmail.com" style={linkStyle}>
                <FaEnvelope style={iconStyle} /> felixatoma2@gmail.com
              </a>
              <a href="tel:+233244173068" style={linkStyle}>
                <FaPhone style={iconStyle} /> +233 244173068
              </a>
              <a href="https://wa.me/233244173068" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                <FaWhatsapp style={iconStyle} /> Send a WhatsApp message
              </a>
              <p style={contactInfoStyle}><FaMapMarkerAlt style={iconStyle} /> Alajo High Street, Accra, Ghana</p>
              <a href="https://github.com/felix-atoma" target="_blank" rel="noopener noreferrer" style={linkStyle}>
                <FaGithub style={iconStyle} /> github.com/felix-atoma
              </a>
            </div>
            <div style={imageContainerStyle}>
              <img src={signingImage} alt="Contact Info Image" style={imageStyle} />
            </div>
          </div>

          {/* Second Zigzag Item: Form and Image */}
          <div style={{ ...zigzagItemStyle, flexDirection: 'row-reverse' }}>
            <div style={formContainerStyle}>
              <h2 style={infoHeaderStyle}>Get in Touch</h2>
              {submitted ? (
                <p style={{ color: '#4caf50', textAlign: 'center' }}>Thank you for your message! I'll get back to you soon.</p>
              ) : (
                <form onSubmit={handleSubmit} style={formStyle}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ ...inputStyle, height: '100px' }}
                  />
                  <button
                    type="submit"
                    style={buttonStyle}
                    onMouseEnter={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseLeave={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <div style={imageContainerStyle}>
              <img src={landingBgImage} alt="Contact Form Image" style={imageStyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

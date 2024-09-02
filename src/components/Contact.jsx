import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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

    // EmailJS integration
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      }, (err) => {
        console.log('FAILED...', err);
      });
  };

  // Styles
  const sectionStyle = {
    backgroundColor: '#ffffff',
    padding: '3rem 1.5rem',
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle = {
    fontSize: '2rem',
    fontWeight: '700',
    textAlign: 'center',
    color: '#333333',
    marginBottom: '2.5rem',
  };

  const zigzagContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  };

  const zigzagItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
  };

  const infoContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  };

  const formContainerStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
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
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
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
    backgroundColor: '#85a76e',
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
          {/* First Zigzag Item: Contact Info Left, Map Right */}
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
              {/* Embed Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.1675973359746!2d-0.2170306845598326!3d5.560344034874077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c3a78c33f4d%3A0x5a73683e240c1d0e!2sAlajo%20High%20Street%2C%20Accra!5e0!3m2!1sen!2sgh!4v1631204798055!5m2!1sen!2sgh"
                width="100%"
                height="250"
                style={{ border: '0', borderRadius: '0.5rem' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Second Zigzag Item: Image Left, Form Right */}
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
                    style={{ ...inputStyle, height: '120px' }}
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
              <img src="/src/assets/landingBg.png" alt="Contact Form Image" style={imageStyle} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

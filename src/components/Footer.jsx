import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#85a76e', color: '#FFFFFF', padding: '1rem 0' }}>
            

            <div style={{ borderTop: '1px solid #FF6F00', marginTop: '0.5rem', paddingTop: '0.5rem', textAlign: 'center', fontSize: '0.75rem', color: '#FFFFFF' }}>
                <p>© {new Date().getFullYear()} Felix Atoma. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React from 'react';
import Index from '../../Components/EmailJS/Index';
import './Footer.css';

const Footer = () => {
  return (
<footer className="footer">
  <div className="footer-left">
  <h3>Pixabay Clone</h3>
  <p>Discover high-quality free images and videos.</p>
  <p>Built with React & Pixabay API</p>
  <p>© 2026 All Rights Reserved</p>
</div>

  <div className="footer-right">
    <Index />
  </div>
</footer>
  );
};

export default Footer;
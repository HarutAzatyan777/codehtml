// Footer.jsx

import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="company-info">
          <h3>HTML School</h3>
          <p>
            Armenia
            <br />
            Yerevan
            <br />
            Phone:+374-41-455-440
            <br />
            Email: developerhar@gmail.com
          </p>
        </div>

 
      </div>

      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

const Header = ({ currentLanguage, onLanguageSwitch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Function to close mobile menu when clicking outside of it
  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    // Attach click event listener to the document body
    document.body.addEventListener('click', closeMobileMenu);

    // Clean up the event listener on component unmount
    return () => {
      document.body.removeEventListener('click', closeMobileMenu);
    };
  }, [mobileMenuOpen]); // Re-run effect when mobileMenuOpen state changes

  return (
    <header className={`main-header ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="logo-container">
        <NavLink to="/">
          <img src="Logo1.svg" alt="Logo" className="logo" />
        </NavLink>
      </div>
      <nav className={`main-navigation ${mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul>
          <li>
            <NavLink to="/HtmlTag">HTML</NavLink>
          </li>
         

          <li>
            <NavLink to="/ColorGenerator">ColorGenerator</NavLink>
          </li>
          
          <li>
            <NavLink to="/TrendingColor">TrendingColor</NavLink>
          </li>
          <li>
            <NavLink to="/HTMLCourses">HTMLCourses</NavLink>
          </li>
          {/* <li>
            <ScrollLink to="priceplans" smooth={true} duration={500}>
              Fonts
            </ScrollLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li>
            <ScrollLink to="login" smooth={true} duration={500}>
              Log In
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="get-started" smooth={true} duration={500}>
              Get Started
            </ScrollLink>
          </li> */}
          <label htmlFor="toggleSwitch" className="switch">
            <span className="on">En</span>
            <span className="off">Am</span>
          </label>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

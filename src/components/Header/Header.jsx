import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };
  

  // Function to close mobile menu when clicking outside of it
  const closeMobileMenu = (event) => {
    const isMenuClicked = event.target.closest('.main-navigation') !== null;
    if (!isMenuClicked && mobileMenuOpen) {
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
            <NavLink to="/HtmlTag">HTML Tags</NavLink>
          </li>
          <li>
            <NavLink to="/ColorGenerator">Color Generator</NavLink>
          </li>
          <li>
            <NavLink to="/TrendingColor">Trending Color</NavLink>
          </li>

          <li>
            <NavLink to="/ImageGenerator">  ImageGenerator</NavLink>
          </li>
          <li>
            <NavLink to="/HTMLCourses">HTML Courses</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/programingblog">Blog</NavLink>
          </li>

          <li>
            <NavLink to="/Resources"> Dev Resources</NavLink>
          </li>
        
        
        </ul>
      </nav>
    </header>
  );
};

export default Header;

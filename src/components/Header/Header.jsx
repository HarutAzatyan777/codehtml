import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };
  
  // Function to close mobile menu when clicking outside of it or on an <li> element
  const closeMobileMenu = (event) => {
    const isMenuClicked = event.target.closest('.main-navigation') !== null;
    const isListItemClicked = event.target.closest('.main-navigation ul li') !== null;
    if ((!isMenuClicked || isListItemClicked) && mobileMenuOpen) {
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
          <img src="logo.svg" alt="Logo" className="logo" title="HTML Tools: Color Generator, Tags, Courses, and Trending Colors | HTML School" />
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
        <NavLink to="/HtmlTag" onClick={closeMobileMenu} title="HTML Tags">HTML Tags</NavLink>
      </li>
      <li>
        <NavLink to="/ColorGenerator" onClick={closeMobileMenu} title="Color Generator">Color Generator</NavLink>
      </li>
      <li>
        <NavLink to="/TrendingColor" onClick={closeMobileMenu} title="Trending Color">Trending Color</NavLink>
      </li>
      <li>
        <NavLink to="/ImageGenerator" onClick={closeMobileMenu} title="Image Generator">Image Generator</NavLink>
      </li>
      <li>
        <NavLink to="/HTMLCourses" onClick={closeMobileMenu} title="HTML Courses">HTML Courses</NavLink>
      </li>
      <li>
        <NavLink to="/Resources" onClick={closeMobileMenu} title="Development Resources">Development Resources</NavLink>
      </li>
      <li>
        <NavLink to="/programingblog" onClick={closeMobileMenu} title="Programming Blog">Programming Blog</NavLink>
      </li>
      <li>
        <NavLink to="/login" onClick={closeMobileMenu} title="Log In">Log In</NavLink>
      </li>
    </ul>
      </nav>
    </header>
  );
};

export default Header;

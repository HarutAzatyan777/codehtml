import React from 'react';
import './HTMLCourses.css'; // Import the CSS file

const HTMLCourses = () => {
  return (
    <div className="container-courses"> 
      <h1>HTML Courses</h1>
      <p>Explore our HTML courses to master the fundamentals and advanced techniques of HTML.</p>
      <ul>
        <li>HTML Fundamentals</li>
        <li>Advanced HTML Techniques</li>
        <li>HTML5 and Beyond</li>
        {/* Add more HTML courses as needed */}
      </ul>
    </div>
  );
};

export default HTMLCourses;

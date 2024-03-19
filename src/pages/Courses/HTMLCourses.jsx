import React from 'react';
import './HTMLCourses.css'; // Import the CSS file
import HTMLQuiz from './HTMLQuiz';
import HtmlCourseVideo from './HtmlCourseVideo'; // Import the HtmlCourseVideo component

const HTMLCourses = () => {
  return (
    <div className="container-courses"> 
      <div className='courses-text'>
        <h1>HTML Courses</h1>
        <p>Explore our HTML courses to master the fundamentals and advanced techniques of HTML.</p>
        <ul>
          <li>HTML Fundamentals</li>
          <li>Advanced HTML Techniques</li>
          <li>HTML5 and Beyond</li>
          {/* Add more HTML courses as needed */}
        </ul>
      </div>

      <HTMLQuiz />

      <div className='html-video'>
        <h2>HTML Course Videos</h2>
        <HtmlCourseVideo
          title="HTML Basics Tutorial"
          videoSrc="https://www.youtube.com/watch?v=kUMe1FH4CHE"
        />
        <HtmlCourseVideo
          title="Another HTML Video"
          videoSrc="https://www.youtube.com/watch?v=VIDEO_ID"
        />
        {/* Add more HtmlCourseVideo components as needed */}
      </div>
    </div>
  );
};

export default HTMLCourses;

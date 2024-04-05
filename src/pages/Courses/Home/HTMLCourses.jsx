import React from 'react';
import './HTMLCourses.css'; // Import the CSS file
import HTMLQuiz from '../Quiz/HTMLQuiz';
import HtmlCourseVideo from '../HtmlVideo/HtmlCourseVideo'; // Import the HtmlCourseVideo component
import MapCourses from '../Map/MapCources';

const HTMLCourses = () => {
  return (
    <div className="container-courses"> 


    <h1>HTML Courses</h1>
        <p>Explore our HTML courses and tutorials to master the fundamentals and advanced techniques of HTML.</p>
      <div className='courses-text'>
        
      <img src="Courses/courses.web" alt="HTML Fundamentals" className='img1-courses' title="HTML Fundamentals Course - HTML School" />

       <div className='section-text-courses'>
       
        <ul>
          <li><a href="https://www.w3schools.com/html/">HTML Fundamentals</a></li>
          <li><a href="https://www.udemy.com/courses/search/?q=html%20advanced%20techniques">Advanced HTML Techniques</a></li>
          <li><a href="https://www.udemy.com/courses/search/?q=html5%20and%20beyond">HTML5 and Beyond</a></li>
          <li><a href="https://www.udacity.com/course/responsive-web-design-fundamentals--ud893">Responsive Web Design with HTML and CSS</a></li>
          <li><a href="https://www.coursera.org/learn/html-emails">HTML Email Coding</a></li>
          <li><a href="https://www.youtube.com/watch?v=qz0aGYrrlhU">HTML Tutorial for Beginners</a></li> {/* Added tutorial */}
          {/* Add more HTML courses and tutorials as needed */}
        </ul>
       </div>
      </div>


      <h2>HTML Course Videos</h2>
      <div className='html-video'>
       
   <div className='video-section-text'>
   <HtmlCourseVideo
          title="HTML Basics Tutorial"
          videoSrc="https://www.youtube.com/watch?v=kUMe1FH4CHE"
        />
        <HtmlCourseVideo
          title="Another HTML Video"
          videoSrc="https://www.youtube.com/watch?v=VIDEO_ID"
        />
   </div>
   <img src="Courses/courses1.web" alt="HTML Course Videos" className='img2-courses' title="HTML Course Videos - HTML School" />


      </div>
      <h2>Free HTML Courses and Tutorials</h2>
      <div className='free-html-courses'>
      <img src="Courses/courses2.web" alt="Free HTML Courses and Tutorials" className='img3-courses' title="Free HTML Courses and Tutorials - HTML School" />

    <div className='section-text-3'>
    <p>Check out these free resources to enhance your HTML skills:</p>
        <ul>
          <li><a href="https://www.w3schools.com/html/">W3Schools HTML Tutorial</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML">MDN Web Docs - HTML</a></li>
          <li><a href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc">The Net Ninja - HTML Tutorial for Beginners</a></li>
          {/* Add more free HTML courses and tutorials as needed */}
        </ul>
    </div>
      </div>
      <MapCourses />
      <HTMLQuiz />
    </div>
  );
};

export default HTMLCourses;

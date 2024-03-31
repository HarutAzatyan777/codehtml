import React, { useEffect } from 'react';
import './Home.css'; // Import the CSS file for styling
import { Helmet } from 'react-helmet'; // Import Helmet for managing document head contents
import ProjectList from '../../components/Project/ProjectList';
import GetStarted from '../GetStarted/GetStarted';

const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page is rendered
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-container">
      {/* Set page title and meta description */}
      <Helmet>
        <title>HTML School - Learn HTML the Easy Way</title>
        <meta name="description" content="Master HTML with our comprehensive courses. Expert instructors, interactive learning, and flexible options. Join us today!" />
      </Helmet> 

      <div className='html-home'>
        <div className='welcome'>
          <h1>Welcome to HTML School</h1>
          <p>At HTML School, we offer comprehensive courses designed to help you master HTML, the cornerstone of web development. Whether you're just starting or looking to enhance your skills, our expert instructors are here to guide you every step of the way.</p>
          <div className='button-home-1'></div>
        </div>
      </div>

      <div className='html-home-2'></div>

      <div className='html-home-3'>
        <img src='html/html-expert-instructors.web' alt='Expert Instructors' className='welcome-3-img' title='Expert Instructors - HTML School' />
        <div className='welcome-3'>
          <h2>Why Choose HTML School?</h2>
          <ul>
            <li><strong>Expert Instructors:</strong> Our instructors have years of experience in web development and are passionate about teaching.</li>
            <li><strong>Interactive Learning:</strong> Dive into hands-on projects and exercises that reinforce your understanding of HTML.</li>
            <li><strong>Flexible Learning:</strong> Choose from flexible learning options, including self-paced courses and live sessions.</li>
            <li><strong>Community Support:</strong> Join a supportive community of learners, where you can collaborate, share ideas, and grow together.</li>
            <li><strong>Career Opportunities:</strong> HTML skills are in high demand. Gain the knowledge you need to pursue exciting career opportunities in web development.</li>
          </ul>
        </div>
      </div>

      <div className='html-home-4'>
        <img src='html/html5-and-beyond.web' alt='html5 and beyond' className='welcome-4-img' title='HTML5 and Beyond - HTML School' />
        <div className='welcome-4'>
          <h2>Our Courses</h2>
          <ul>
            <li><strong>HTML Fundamentals:</strong> Master the basics of HTML, including tags, attributes, and document structure.</li>
            <li><strong>Advanced HTML Techniques:</strong> Learn advanced HTML techniques such as forms, multimedia embedding, and semantic markup.</li>
            <li><strong>HTML5 and Beyond:</strong> Explore the latest features of HTML5 and how to leverage them to create modern, responsive websites.</li>
          </ul>
        </div>
      </div>

      <GetStarted />
      <ProjectList />
    </div>
  );
};

export default Home;

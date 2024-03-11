import React from 'react';
import './Home.css'; // Import the CSS file for styling


const Home = () => {
  return (
    <div className="home-container">
      <div className='html-home'>
    
      <div className='welcome'>
      <h1>Welcome to HTML School</h1>
      <p>At HTML School, we offer comprehensive courses designed to help you master HTML, the cornerstone of web development. Whether you're just starting or looking to enhance your skills, our expert instructors are here to guide you every step of the way.</p>
      </div>
      <img src='html/school.web' alt='three' className='welcome-img' />
      </div>

<div className='html-home-2'>
        <img src='html/html2.web' alt='three' className='welcome-2-img' />
<div className='welcome-2'>
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

     
      
      <h2>Our Courses</h2>
      <ul>
        <li><strong>HTML Fundamentals:</strong> Master the basics of HTML, including tags, attributes, and document structure.</li>
        <li><strong>Advanced HTML Techniques:</strong> Learn advanced HTML techniques such as forms, multimedia embedding, and semantic markup.</li>
        <li><strong>HTML5 and Beyond:</strong> Explore the latest features of HTML5 and how to leverage them to create modern, responsive websites.</li>
        {/* Add more courses as needed */}
      </ul>
      
      <h2>Enrollment Process</h2>
      <p>Ready to start learning? Enroll in a course today! Simply browse our course catalog, select the course that interests you, and follow the enrollment instructions. If you have any questions, feel free to reach out to our team.</p>

    </div>
    
  );
};

export default Home;

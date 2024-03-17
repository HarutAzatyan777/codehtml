import React,{useEffect} from 'react';
import './Home.css'; // Import the CSS file for styling
import { NavLink } from 'react-router-dom';





const Home = () => {
  useEffect(() => {
    // Scroll to the top when the page is rendered
    window.scrollTo(0, 0);
  }, [])
  return (
<div className="home-container">
  <div className='html-home'>
    <div className='welcome'>
      <h1>Welcome to HTML School</h1>
      <p>At HTML School, we offer comprehensive courses designed to help you master HTML, the cornerstone of web development. Whether you're just starting or looking to enhance your skills, our expert instructors are here to guide you every step of the way.</p>
 <div className='button-home-1'>

 </div>

    </div>
    {/* <img src='html/school.web' alt='three' className='welcome-img' /> */}
  </div>

  <div className='html-home-2'>
    <section className='section-1'>
    <NavLink to="/HtmlTag" className="search-button">
    <div className="custom-button">
          <img src='html/searchhtml.web' alt='color'  />
  <p>search Html Tags</p>
       </div>
      </NavLink>
        <NavLink to="/ColorGenerator" className="color-button">
        <div className="custom-button">
          <img src='html/color.web' alt='color'  />
  <p>Creating visually appealing website designs has never been easier with our innovative color tools generator.</p>
       
        </div>
        </NavLink>
      <NavLink to="/Color" className="color-button">
      <div className="custom-button">Color Generator</div>
      </NavLink>
      <NavLink to="/Color" className="color-button">
      <div className="custom-button">Color Generator</div>
      </NavLink>
    </section>
  
</div>

<div className='html-home-3'>
        <img src='html/html2.web' alt='three' className='welcome-3-img' />
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
<img src='html/html3.web' alt='html-tag' className='welcome-4-img' />
  <div className='welcome-4'>
<h2>Our Courses</h2>
      <ul>
        <li><strong>HTML Fundamentals:</strong> Master the basics of HTML, including tags, attributes, and document structure.</li>
        <li><strong>Advanced HTML Techniques:</strong> Learn advanced HTML techniques such as forms, multimedia embedding, and semantic markup.</li>
        <li><strong>HTML5 and Beyond:</strong> Explore the latest features of HTML5 and how to leverage them to create modern, responsive websites.</li>
        {/* Add more courses as needed */}
      </ul>
  </div>

      
</div>
    

    </div>
    
  );
};

export default Home;

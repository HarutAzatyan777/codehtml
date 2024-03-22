// Products.js

import React,{useState} from 'react';
import './Products.css';

const Products = () => {
  const services = [
    {
      id: 1,
      name: 'React JS Development',
      description: 'ReactJS is renowned for its extensibility, adjustability, and convenience. HarDev ReactJS developers create complex software for your business, including web browsers and mobile application user interfaces.',
      price: 1999.99,
      discount: 200, // Assuming a discount of 200 dollars
    },
    {
      id: 2,
      name: 'Node.js Development',
      description: 'Node.js enables fast and scalable server-side and networking applications. HarDev Node.js developers produce dynamic web page content before the page is sent to the end user is web browser, using event-driven programming to communicate with web servers through speedy JavaScript interpreters.',
      price: 2999.99,
      discount: 300, // Assuming a discount of 300 dollars
    },
    {
      id: 3,
      name: 'Full Stack Development',
      description: 'Elevate your business with our companys specialized expertise in Node.js, React, Next.js, PostgreSQL, MongoDB, and SQL technologies. We provide comprehensive end-to-end development services, ensuring seamless integration and optimal performance for your projects. Partner with us to unlock the full potential of these cutting-edge technologies and drive innovation in your digital endeavors.',
      price: 3999.99,
      discount: 400, // Assuming a discount of 400 dollars
    },
    // {
    //   id: 4,
    //   name: 'Full Stack Development',
    //   description: 'Offer end-to-end development services, from designing user interfaces to implementing server-side logic.',
    //   price: 3999.99,
    //   discount: 400, // Assuming a discount of 400 dollars
    // },
    // Add more services as needed
  ];

  const [expandedDescriptions, setExpandedDescriptions] = useState([]);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      const index = newExpanded.indexOf(id);

      if (index !== -1) {
        newExpanded.splice(index, 1);
      } else {
        newExpanded.push(id);
      }

      return newExpanded;
    });
  };

  const isDescriptionExpanded = (id) => expandedDescriptions.includes(id);

  return (
    <div className="products-container">
    
      <div className="products-list">
        {services.map((service) => (
          <div key={service.id} className="product-item">
            <h3>{service.name}</h3>
            <p>
              {isDescriptionExpanded(service.id) ? service.description : `${service.description.slice(0, 150)}...`}
              <span className="read-more" onClick={() => toggleDescription(service.id)}>
                {isDescriptionExpanded(service.id) ? ' Read Less' : ' Read More'}
              </span>
            </p>
            <p className="price">
              <span className="discounted-price">
                <del>${(service.price).toFixed(2)}</del> ${(service.price - service.discount).toFixed(2)}
              </span>
            </p>
            <a className="contact-button-1" posts-container={`mailto:harutazatyan45@gmail.com?subject=${encodeURIComponent('Subject of the email')}&body=${encodeURIComponent('Body of the email')}`}>
              Contact Us
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
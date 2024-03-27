import React from 'react';

const ResourceItem = ({ title, description, link, image }) => (
  <div className="resource-item">
    <img src={image} alt={title} className='resource-img' title={`Explore ${title} - Developer Resources`}/>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Learn More
    </a>
  </div>
);

export default ResourceItem;

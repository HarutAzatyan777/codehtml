import React from 'react';
import "./ProjectCard.css"

const ProjectCard = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className="project-card">
      <a href={projectUrl} className='a-img'>
      <img src={imageUrl} alt={title} className="project-image" title={`Explore ${title}`} />

      </a>
      <div className="project-details">
     
        <a href={projectUrl} className="project-link"  rel="noopener noreferrer">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;

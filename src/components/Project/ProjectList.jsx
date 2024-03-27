import React from 'react';
import ProjectCard from './ProjectCard';
import "./ProjectList.css"

const ProjectList = () => {
  // Sample data for projects
  const projects = [
    {
      title: 'HTML Tools:  Tags',
      description: 'Find the perfect HTML tag for your web projects with ease.',
      imageUrl: 'projectlist/html-tools-color-generator-tags-courses-trending-colors.web' ,
      projectUrl: 'https://htmltagss.com/HtmlTag' ,
      alt: 'HTML Tools: Color Generator, Tags, Courses, and Trending Colors'
    },
    {
      title: 'Color Generator',
      description: 'Customize your site\'s design with a lightning-fast color generator.',
      imageUrl: 'projectlist/colorgenerator.web',
      projectUrl: 'https://htmltagss.com/ColorGenerator',
      alt: 'Color Generator'
    },
    {
      title: 'Trending Color',
      description: 'Explore trending colors and enhance your website\'s visual appeal.',
      imageUrl: 'projectlist/trend.web',
      projectUrl: 'https://htmltagss.com/TrendingColor',
      alt: 'Trending Color'
    },
    {
      title: 'Programming Blog',
      description: 'Stay updated with the latest programming tutorials and insights.',
      imageUrl: 'projectlist/company.web',
      projectUrl: 'https://htmltagss.com/programingblog',
      alt: 'Programming Blog'
    }
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          projectUrl={project.projectUrl}
          alt={project.alt}
        />
      ))}
    </div>
  );
};

export default ProjectList;

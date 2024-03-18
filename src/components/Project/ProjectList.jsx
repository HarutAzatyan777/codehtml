import React from 'react';
import ProjectCard from './ProjectCard';
import "./ProjectList.css"


const ProjectList = () => {
  // Sample data for projects
  const projects = [
    {
      title: 'HTML-TAGS>',
      description: 'Find the perfect HTML tag for your web projects with ease.',
      imageUrl: 'projectlist/html1.web',
      projectUrl: 'https://htmltagss.com/HtmlTag'
  },
  
    {
      title: 'Color Generator',
    description: 'Customize your site\'s design with a lightning-fast color generator.',
    imageUrl: 'projectlist/colorgenerator.web',
    projectUrl: 'https://htmltagss.com/Color'
    },
    {
      title: 'QR Generator',
      description: 'Generate QR codes quickly and easily for your needs.',
      imageUrl: 'projectlist/qr.web',
      projectUrl: 'https://harutdev.com/QrCode'
  },
  
  {
    title: 'CodeRed',
    description: 'Let us create an affordable and quality website for you.',
    imageUrl: 'projectlist/company.web',
    projectUrl: 'https://codered.harutdev.com/'
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
        />
      ))}
    </div>
  );
};

export default ProjectList;

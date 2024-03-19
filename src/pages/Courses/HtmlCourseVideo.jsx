import React from 'react';
import './HtmlCourseVideo.css'; // Import the CSS file for styling

const HtmlCourseVideo = ({ title, videoSrc }) => {
  return (
    <div className="html-course-video-container">
      <h2>{title}</h2>
      <div className="video-wrapper">
        {/* Displaying the HTML course video as a link */}
        <a 
          href={videoSrc}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default HtmlCourseVideo;

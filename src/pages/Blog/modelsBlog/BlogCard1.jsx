import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './BlogCard.css';

const BlogCard = ({ id, title, content, imageSrc, videoSrc, postId }) => {
  return (
    <div className="blog-card">
      <h2 className="blog-title">
        {/* Wrap the title in a Link component to navigate to the single post page */}
        <Link to={`/post/${id}`}>{title}</Link>
      </h2>
      {imageSrc && <img src={imageSrc} alt={title} className="blog-image" />}
      {videoSrc && <video controls src={videoSrc} className="blog-video" />}
      <p className="blog-content">{content}</p>
    </div>
  );
};

BlogCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // New id prop
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  videoSrc: PropTypes.string,
};

export default BlogCard;

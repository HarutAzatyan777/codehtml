import React from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Post.css'; // Import your CSS file

const Post = ({
  id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isEditable,
}) => {
  return (
    <div className={clsx('root', { 'rootFull': isFullPost })}>
      {isEditable && (
        <div className="editButtons">
          {/* Edit and Delete buttons */}
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx('image', { 'imageFull': isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className="wrapper">
        <div className="indention">
          <h2 className={clsx('title', { 'titleFull': isFullPost })}>
            {isFullPost ? (
              title
            ) : (
              <Link to={`/posts/${id}`} className="postLink">
                {title}
              </Link>
            )}
          </h2>
          <ul className="tags">
            {tags &&
              tags.length > 0 &&
              tags.map((name) => (
                <li key={name}>
                  <Link to={`/tag/${name}`} className="tagLink">
                    {name}
                  </Link>
                </li>
              ))}
          </ul>
          {children && <div className="content">{children}</div>}
          <ul className="postDetails">
            <li>
              <span>{viewsCount}</span>
            </li>
            {/* <li>
              <span>{commentsCount}</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
  }).isRequired,
  viewsCount: PropTypes.number.isRequired,
  commentsCount: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
  isFullPost: PropTypes.bool,
  isEditable: PropTypes.bool,
};

export default Post;

// BlogList.jsx
import React from 'react';

const BlogList = ({ posts }) => {
  return (
    <div className="blog-list">
      <h2>Blog Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <img src={post.imageURL} alt={post.title} />
            <video src={post.videoURL} controls />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;


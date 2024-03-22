// PostForm.jsx
import React, { useState, useRef } from 'react';
import './PostForm.css';
import instance from '../../Axios'; // Import the Axios instance

const PostForm = ({ addPost }) => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const response = await instance.post('/postblog', formData);

      addPost(response.data);
      formRef.current.reset();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit} ref={formRef}>
      <input
        type="text"
        name="title"
        placeholder="Enter title"
        className="post-input"
      />
      <textarea
        name="content"
        placeholder="Enter content"
        className="post-textarea"
      />
      <div className="file-input-container">
        <label htmlFor="image" className="file-input-label">
          Add Image
          <input type="file" name="image" id="image" accept="image/*" className="file-input" />
        </label>
        <label htmlFor="video" className="file-input-label">
          Add Video
          <input type="file" name="video" id="video" accept="video/*" className="file-input" />
        </label>
      </div>
      <button type="submit" className="post-button">
        Add Post
      </button>
    </form>
  );
};

export default PostForm;

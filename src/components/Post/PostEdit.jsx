import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostEdit = () => {
  const { id } = useParams(); // Get the post ID from the URL params
  const [postData, setPostData] = useState({
    title: '', // Initialize with empty values
    content: '',
    // Add more fields as needed for editing
  });

  useEffect(() => {
    // Fetch the post data with the 'id' from an API or other data source
    // Example API call using fetch:
    fetch(`/api/posts/${id}`) // Replace with your actual endpoint
      .then((response) => response.json())
      .then((data) => {
        // Set the post data received from the server
        setPostData({
          title: data.title,
          content: data.content,
          // Update with the actual fields you want to edit
        });
      })
      .catch((error) => {
        console.error('Error fetching post:', error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    // Update the state with edited values when the user inputs changes
    const { name, value } = e.target;
    setPostData({
      ...postData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the action to update the post with the edited data
    // Example: API call to update the post
    fetch(`/api/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        // Handle response after updating the post
        console.log('Post updated successfully:', response);
        // Perform any necessary actions upon successful update
      })
      .catch((error) => {
        // Handle errors if the update fails
        console.error('Error updating post:', error);
      });
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            name="content"
            value={postData.content}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default PostEdit;

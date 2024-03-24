import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from '../../Axios'; // Import Axios
import styles from './AddPost.css';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [postCreated, setPostCreated] = useState(false); 
  
  const isURLValid = (url) => {
    // Regular expression for URL validation
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  
    return urlPattern.test(url);
  };

  const handlePublish = async () => {
    let data; // Declare data here
  
    try {
      // Validate imageUrl using isURLValid function
      if (imageUrl && !isURLValid(imageUrl)) {
        console.error('Invalid URL for imageUrl');
        // Handle the case where the URL is not valid, display an error message, etc.
        return;
      }
  
      // Set data directly
      data = {
        title,
        text,
        tags: tags.split(',').map(tag => tag.trim()),
        imageUrl,
        // user: ...
      };
  
      // Use data directly in the axios.post call
      const response = await axios.post('/posts', data);
      console.log('Post created:', response.data);
  
      // Clear the form after successful submission
      setTitle('');
      setTags('');
      setText('');
      setImageUrl('');
      setPostCreated(true);
      // Further logic after successful post creation
    } catch (error) {
      console.error('Error publishing post:', error);
      // Handle error, display a message, etc.
    }
  };
  
  const handleRemove = async () => {
    try {
      // Implement removal logic using an appropriate endpoint or action
      // For example:
      // await axios.delete(`/posts/${postId}`);
      
      // Reset state and postCreated status after successful removal
      setTitle('');
      setTags('');
      setText('');
      setImageUrl('');
      setPostCreated(false);

      console.log('Post removed');
    } catch (error) {
      console.error('Error removing post:', error);
      // Handle error, display a message, etc.
    }
  };

  return (
    <div className={styles.addPostContainer}>
      <div>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          fullWidth
          margin="normal"
          helperText="Separate tags with commas"
        />
      </div>
      <div>
        <TextField
          label="Text"
          multiline
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          margin="normal"
          placeholder="Enter text..."
        />
          <TextField
    value={imageUrl}
    onChange={(e) => setImageUrl(e.target.value)}
    className={styles.imageUrl}
    variant="standard"
    placeholder="Ссылка на изображение"
    fullWidth
  />
      </div>
      <Button variant="contained" color="primary" onClick={handlePublish}>
        Publish
      </Button>

      {postCreated && (
        <div>
          <p>Post created!</p>
          <Button variant="contained" color="secondary" onClick={handleRemove}>
          Remove Post
          </Button>
          <Link to="/programingblog">Go to Blog Home</Link>
        </div>
      )}
    </div>
  );
}

export default AddPost;

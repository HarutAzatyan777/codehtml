import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FullPost from '../../pages/FullPost/FullPost'; // Replace with the correct path
import Header from "../../components/Header/Header"


const Tags = () => {
  const { tagName } = useParams();
  const navigate = useNavigate();
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const fetchAndRedirect = async () => {
      try {
        // Fetch posts related to the selected tag
        const posts = await getPostsByTag(tagName);

        // Set the postId to the first post related to the tag
        if (posts.length > 0) {
          setPostId(posts[0].id);
        }
      } catch (error) {
        console.error('Error fetching and redirecting:', error);
      }
    };

    // Call the fetchAndRedirect function
    fetchAndRedirect();
  }, [tagName]);

  const getPostsByTag = async (tag) => {
    // Replace this with your actual data fetching logic
    try {
      const response = await fetch(`your_api_url/posts?tag=${tag}`);
      const data = await response.json();
      return data.posts;
    } catch (error) {
      console.error('Error fetching posts by tag:', error);
      return [];
    }
  };

  // Render the FullPost component with the postId
  return (
    <div>
      <Header />
      <h2>Posts related to {tagName}</h2>
      {postId && <FullPost id={postId} />}
    </div>
  );
};

export default Tags;

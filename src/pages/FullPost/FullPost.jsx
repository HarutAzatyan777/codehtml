import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "../../Axios";
import Post from "../../components/Post/Post";
import CommentsBlock from "../../components/CommentsBlock";
import './FullPost.css';
import { animateScroll as scroll } from 'react-scroll';

const FullPost = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await Axios.get(`/posts/${id}`);
        setPost(data);
        setIsLoading(false);
        // Scroll to the top when the component mounts
        scroll.scrollToTop();
      } catch (error) {
        handleFetchError(error);
      }
    };

    fetchPost();
  }, [id]);

  const handleFetchError = (error) => {
    console.error("Error fetching the post:", error);
    alert("Error fetching the post. Please try again later.");
    setIsLoading(false);
  };

  const addComment = async (postId, text) => {
    try {
      const response = await Axios.post(`/posts/${id}/comment`, { text });
      const addedComment = response.data;
      setComments((prevComments) => [...prevComments, addedComment]);
    } catch (error) {
      handleCommentError(error);
    }
  };

  const handleCommentError = (error) => {
    console.error("Error adding comment:", error);
    alert("Failed to add a comment. Please try again.");
    // Handle error, e.g., show a user-friendly message or provide fallback actions
  };

  const handleAddComment = () => {
    if (newComment.trim().length > 0) {
      addComment(id, newComment);
      setNewComment('');
    } else {
      alert("Please enter a comment before posting.");
    }
  };

  return (
    <div className="full-post-page">
  

      <div className="full-post-container">
        <Link to="/programingblog" className="homefull-button">
          <button className="homefull-button">Blog</button>
        </Link>
        {!isLoading && post ? (
      <div className="flex-container">
 <div className="flex-container">
  <Post
    id={post._id}
    title={post.title}
    imageUrl={post.imageUrl}
    user={post.user}
    createdAt={post.createdAt}
    viewsCount={post.viewsCount}
    commentsCount={post.comments ? post.comments.length : 0}
    tags={post.tags}
    download={post.download}
    downloadImage={post.downloadImage}
    isEditable
  >
    {post.text.split('\n').map((paragraph, index) => (
      <p key={index}>
        {paragraph}
      </p>
    ))}
    <div>
      <span>
        {post.user && post.user.fullName
          ? post.user.fullName
          : ""}
      </span>
    </div>
  </Post>
</div>

  
          <div className="comments-section">
            <CommentsBlock items={comments} isLoading={false} postId={id} />
            <div>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="textarea-fullpost"
              />
              <button className="button-fullpost" onClick={handleAddComment}>
                Post Comment
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>Post not found</div>
      )}
    </div>

    </div>
 
  );
};

export default FullPost;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchTags } from '../../redux/slices/posts';
import './BlogHome.css'; // Import your CSS file
import Post from '../../components/Post/Post';
import TagsBlock from '../../components/TagsBlock';
import Modal from 'react-modal';
import ButtonContact from '../Home/ButtonContact'


const isURLValid = (url) => {
  // Regular expression to check if the URL is valid
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  return urlRegex.test(url);
};

const BlogHome = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);
  const isPostsLoading = posts.status === 'loading';
  const isTagsLoading = tags.status === 'loading';

  const [filter, setFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());

    // Autoplay the modal after 2000 milliseconds (2 seconds)
    const autoplayTimeout = setTimeout(() => {
      openModal();
    }, 20000);

    return () => clearTimeout(autoplayTimeout); // Clear the timeout on component unmount
  }, [dispatch]);

  const chunkArray = (array, size) => {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  };

  const filteredPosts = () => {
    switch (filter) {
      case 'new':
        return posts.items.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'moreViews':
        return posts.items.slice().sort((a, b) => b.viewsCount - a.viewsCount);
      default:
        return posts.items;
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="blog-home-container">
   
      <div className="blog-text">
        <h2>Welcome to the Blog</h2>
        <p>This is the home page of our blog application...</p>
        <p>Start by navigating to different sections using the links below or explore the latest posts.</p>
      </div>

      {/* Modal for displaying detailed content */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Blog Details"
        className="modal-container"
      >
    <div>
    <a href="https://codered.harutdev.com/">
        <img src="/img/CodeRed.png" alt="Tech" className='pop-img'/>
    </a>
</div>
     
          <ButtonContact />

      

        <button className='close-pop' onClick={closeModal}>Close</button>


      </Modal>


      {isURLValid('your-ad-image-url') && (
        <div className="reklam-banner">
          {/* Add your advertisement content and styling here */}
          <img src="your-ad-image-url" alt="Advertisement" />
          <p>Check out our amazing products/services!</p>
        </div>
      )}


      <TagsBlock items={tags.items} isLoading={isTagsLoading} />
      <div className="button-container-blog">
        <Link to="/add-post">
          <button className="blog-home-button">Add Post</button>
        </Link>
        <button className="blog-home-button" onClick={() => setFilter('new')}>
          New Posts
        </button>
        <button className="blog-home-button" onClick={() => setFilter('moreViews')}>
          More Views
        </button>
        <button className="blog-home-button" onClick={() => setFilter('all')}>
          All Posts
        </button>
      </div>

      <div className="posts-container">
        {chunkArray(isPostsLoading ? [...Array(100)] : filteredPosts(), 1).map((postPair, pairIndex) => (
          <div key={pairIndex} className="post-pair">
            {postPair.map((obj, index) => (
              isPostsLoading || !obj ? (
                <Post key={index} isLoading={true} />
              ) : (
                <Post
                  key={obj._id}
                  id={obj._id}
                  title={obj.title}
                  imageUrl={obj.imageUrl}
                  user={obj.user}
                  createdAt={obj.createdAt}
                  viewsCount={obj.viewsCount}
                  commentsCount={3}
                  tags={obj.tags}
                  isEditable
                />
              )
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogHome;

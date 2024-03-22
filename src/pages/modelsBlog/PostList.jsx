import React from 'react';
import Blogcard from './BlogCard1';




const PostList = ({ blogData }) => {
  
  return (
    <div className="blog-cards">

{blogData.map((blog, index) => (
  <Blogcard key={index} title={blog.title} content={blog.content} />
      ))}
    </div>
  );
};

export default PostList;
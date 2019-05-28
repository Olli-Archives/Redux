import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <>
      <Link to={`/comments/${post.id}`}>
        <p> POST: {post.title} </p>
        <p>POST BODY: {post.body}</p>
      </Link>
      <p>DELET POST</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;


import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }){
  return (

    <Link to={`/comments/${post.id}`}>
      <p> POST: { post.title } </p>
    </Link>
  );
}

Post.propTypes = {
  
};

export default Post;


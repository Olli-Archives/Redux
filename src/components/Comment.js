import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Post({ comment }){
  return (
    <p> COMMENT: { comment} </p>
  );
}

Post.propTypes = {
  comment:PropTypes.string.isRequired
};

export default Post;


import React from 'react';
import PropTypes from 'prop-types';

function Post({ title }){
  return (
    { title }
  );
}

Post.propTypes = {
  title:PropTypes.string.isRequired
};

export default Post;


import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';

function Posts({ postsArray }){

  const posts = postsArray.map((post, i)=>{
    console.log('post', post);
    return <li key={i}><Post title={post.title}/></li>;
  });

  return (
    <ul>{posts}</ul>
  );
}

Posts.propTypes = {
  postsArray: PropTypes.array.isRequired
};

export default Posts;

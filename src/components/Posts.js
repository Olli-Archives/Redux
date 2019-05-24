import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

function Posts({ posts }){

 
  const Posts = ()=>{
    if(posts.length > 0){
      return posts.map((post, i)=>{
   
        return <li key={i}><Post post={post}/></li>;
      });
    }
    return <h1>no posts</h1>;
  };


  

  return (
    <ul><Posts/></ul>
  );
}


Posts.propTypes = {
  posts:PropTypes.array
};

export default connect(
  mapStateToProps,
  null) (Posts);

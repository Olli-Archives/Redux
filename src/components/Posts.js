import React from 'react';
import Post from './Post';
import PropTypes from 'prop-types';


import { connect } from 'react-redux';
import { getPosts } from '../selectors/postSelectors';
import { deletePost } from '../actions/postActions';


const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  onClickDelete(id) {
    dispatch(deletePost(id));
  }
});

function Posts({ posts, onClickDelete }){


  const PostsList = ()=>{
    if(posts.length > 0){
      return posts.map((post, i)=>{
   
        return <li onClick = {()=>onClickDelete(post.id)} key={i}><Post post={post}/></li>;
      });
    }
    return <h1>no posts</h1>;
  };


  return (
    <ul><PostsList /></ul>
  );
}


Posts.propTypes = {
  posts:PropTypes.array,
  onClickDelete:PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (Posts);

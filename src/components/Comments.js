import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getComments } from '../selectors/commentSelectors';

const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.postId)
});

function Comments({ comments, postId }){
 
  console.log('match', postId);
  const Comments = ()=>{
    if(comments.length > 0){
      return comments.map((comment, i)=>{
    
        console.log('commentincomment', comment);
        return <li key={i}><Comment comment={comment}/></li>;
      });
    }
    return <h1>no comments</h1>;
  };

  return (
    <ul><Comments/></ul>
  );
}


Comments.propTypes = {
  comments:PropTypes.array
};

export default connect(mapStateToProps, null)(Comments);

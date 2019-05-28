import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import { deleteComment } from '../actions/commentActions';
import { connect } from 'react-redux';
import { getComments } from '../selectors/commentSelectors';



const mapStateToProps = (state, props) => ({
  comments: getComments(state, props.postId)
});
const mapDispatchToProps = dispatch => ({

  onClickDelete(postId, commentId) {
  
    dispatch(deleteComment(postId, commentId));
  }
});


function Comments({ comments, onClickDelete, postId }){
  console.log('post id in comment', postId);
  const CommentsList = ()=>{
    if(comments.length > 0){
      return comments.map((comment, i)=>{
  
        return <li key={i}><Comment comment={comment} onClickDelete={onClickDelete} postId={postId} commentId={i}/></li>;
      });
    }
    return <h1>no comments</h1>;
  };

  return (
    <ul><CommentsList/></ul>
  );
}


Comments.propTypes = {
  comments:PropTypes.array,
  onClickDelete:PropTypes.func.isRequired,
  postId: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);

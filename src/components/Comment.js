import React from 'react';
import PropTypes from 'prop-types';



function Comment({ comment, onClickDelete, postId, commentId }) {
  return (
    <>
      <p> COMMENT: {comment} </p>
      <p onClick = {()=>onClickDelete(postId, commentId) }> DELETE ME</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  postId: PropTypes.string.isRequired,
  commentId: PropTypes.string.isRequired

};

export default Comment;


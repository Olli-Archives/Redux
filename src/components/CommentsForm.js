import React from 'react';
import PropTypes from 'prop-types';

function CommentsForm({ commentText, handleSubmit, handleCommentOnChange, }) {

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='add comment' value={commentText} onChange={handleCommentOnChange}></input>
      <button>SUBMIT!!!</button>
    </form>

  );
}


CommentsForm.propTypes = {
  commentText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleCommentOnChange: PropTypes.func.isRequired
};

export default CommentsForm;

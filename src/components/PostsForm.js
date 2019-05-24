import React from 'react';
import PropTypes from 'prop-types';

function PostsForm({ titleText, postText, handleSubmit, handleTitleOnChange, handlePostChange }){
  
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='add title' value={titleText} onChange={handleTitleOnChange}></input>
      <input placeholder='add post' value={postText} onChange={handlePostChange}></input>
      <button>SUBMIT!!!</button>
    </form>

  );
}


PostsForm.propTypes = {
  titleText:PropTypes.string.isRequired,
  postText:PropTypes.string.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  handleTitleOnChange:PropTypes.func.isRequired,
  handlePostChange:PropTypes.func.isRequired
};

export default PostsForm;

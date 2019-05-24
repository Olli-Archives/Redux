import React from 'react';
import PropTypes from 'prop-types';

function PostsForm({ text, handleSubmit, handleOnChange }){
  return (
    <form onSubmit={handleSubmit}>
      <input value={text} onChange={handleOnChange}></input>
      <button>SUBMIT!!!</button>
    </form>

  );
}


PostsForm.propTypes = {
  text:PropTypes.string.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  handleOnChange:PropTypes.func.isRequired
};

export default PostsForm;

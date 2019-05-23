export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';

export const createComment = (postId, comment) => {
  return {
    type: CREATE_COMMENT,
    payload: {
      postId: postId,
      comment: comment
    }
  };
};
export const deleteComment = (postId, commentId) => {
  return {
    type: DELETE_COMMENT,
    payload: {
      postId: postId,
      commentId: commentId
    }
  };
};

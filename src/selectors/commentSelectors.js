export const getComments = (state, postId) =>{
  console.log('post id in in get comments', postId);
  return state.comments[postId] || [];
}
;

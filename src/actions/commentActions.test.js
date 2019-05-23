import { CREATE_COMMENT, DELETE_COMMENT, createComment, deleteComment } from './commentActions';

describe('comment actions', ()=>{
  it('creates a comment', ()=>{
    expect(createComment('postId', 'comment')).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postId: 'postId',
        comment: 'comment'
      }
    });
  });
  it('deletes a comment', ()=>{
    expect(deleteComment('postId', 'commentId')).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postId: 'postId',
        commentId: 'commentId'
      }
    });
  });
})
;

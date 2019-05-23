import { CREATE_POST, DELETE_POST, createPost, deletePost } from './postActions';

describe('post actions', ()=>{
  it('creates a post ction', ()=>{
    expect(createPost('title', 'body')).toEqual({
      type: CREATE_POST,
      payload: { title: 'title', body:'body' }
    });
  });
  it('creates a delete post action', ()=>{
    expect(deletePost(12)).toEqual({
      type: DELETE_POST,
      payload: 12
    });
  });


});

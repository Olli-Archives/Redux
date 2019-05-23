import reducer from './postReducer';
import { createPost, deletePost } from '../actions/postActions';


describe('post reducer', ()=>{
  describe('post reducer', ()=>{
    it('handle create post action', ()=>{
      const newState = reducer([], createPost('title', 'body'));
      expect(newState).toEqual([{ title:'title', body:'body' }]);
    });
    it('handle delete post action', ()=>{
      const initialState = [
        { title:'1st post', body:'1st body' },
        { title:'2nd post', body:'2nd body' },
        { title:'3rd post', body:'3rd body' },
      ];
      const newState = reducer(initialState, deletePost(1));
      expect(newState).toEqual([
        { title:'1st post', body:'1st body' },
        { title:'3rd post', body:'3rd body' },
      ]);
    });
  });
})
;

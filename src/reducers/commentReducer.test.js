import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';


describe('commentReducer', ()=>{
  it('handles create comment action', ()=>{
    const newState = reducer({}, createComment(1, 'my first comment'));
    expect(newState).toEqual({ 1:['my first comment'] });
  });
  it('handles delete comment action', ()=>{
    const newState = reducer({ 0:['dont delete me'], 1:['delete me'], 2:['dont delete me'] }, deleteComment(1, 0));
    expect(newState).toEqual({ 0:['dont delete me'], 1:[], 2:['dont delete me'] });
    
 
  });
})
;

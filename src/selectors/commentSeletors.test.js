import { getComments } from './commentSelectors';

describe('commentSelectors', ()=>{
  it('gets all comments by post id', ()=>{
    console.log('jldfjalfjadlfjasdlfaljaf', typeof getComments);
    const initialState = 
    {
      comments: { 
        0: ['test'],
        1:['hi', 'by'] 
      }
    };
    expect(getComments(initialState, 0)).toEqual(['test']);
  });
})
;

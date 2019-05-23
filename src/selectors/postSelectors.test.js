import { getPosts, getPost } from './postSelectors';

const state = {
  posts:
  [
    { title:'1st post', body:'1st body' },
    { title:'2nd post', body:'2nd body' },
    { title:'3rd post', body:'3rd body' }
  ]
};

describe('Selectors', ()=>{
  it('gets all posts', ()=>{
 
    expect(getPosts(state)).toEqual(
      [{ title:'1st post', body:'1st body', id:0 },
        { title:'2nd post', body:'2nd body', id:1 },
        { title:'3rd post', body:'3rd body', id:2 }]
    );
  });
  it('gets a pos', ()=>{
 
    expect(getPost(state, 0)).toEqual(
      { title:'1st post', body:'1st body', id:0 }
    );
  });
})
;

import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from './Posts';


describe('Posts component', ()=>{
  it('renders list of posts', ()=>{
    const postsArray = [
      { title:'1st post', body:'1st body' },
      { title:'2nd post', body:'2nd body' },
      { title:'3rd post', body:'3rd body' },
    ];
    const wrapper = shallow(<Posts postsArray={postsArray}/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;

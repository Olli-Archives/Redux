import React from 'react';
import Post from './Post';
import { shallow } from 'enzyme';

describe('Post component', ()=>{
  it('renders a title', ()=>{
    const wrapper = shallow(<Post title='test title'/>);
    expect(wrapper).toMatchSnapshot();
  });
})
;

import React, { PureComponent } from 'react';
import PostsForm from './PostsForm';

class CreatePostContainer extends PureComponent{
state={
  text:'',
  post:'',
  
}

handleSubmit(e){
  e.preventDefault();
  this.setState({ post:this.state.text });
}

handleonChange({ target }){
  this.setState({ text:target.value });
}

render(){
  return (
    <>
      <PostsForm text={this.state.text} handleSubmit={this.handleSubmit} handleOnChange={this.handleOnChange}/>
    </>
  );
}
}



export default CreatePostContainer;

import React, { PureComponent } from 'react';
import PostsForm from './PostsForm';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(title, body) {
    dispatch(createPost(title, body));
  }
});



class CreatePostContainer extends PureComponent{

state={
  titleText:'',
  postText:'',

}


handleSubmit = (e)=>{
  e.preventDefault();
  const { titleText, postText } = this.state;
  this.props.onSubmit(titleText, postText);
  this.setState({ 
    titleText:'',
    postText:''
  });
}


handleTitleChange = ({ target })=>{
  this.setState({ titleText:target.value });
}

handlePostChange = ({ target })=>{
  this.setState({ postText:target.value });
}

render(){
  return (
    <>
      <PostsForm titleText={this.state.titleText} postText={this.state.postText} handleSubmit={this.handleSubmit} handleTitleOnChange={this.handleTitleChange} handlePostChange={this.handlePostChange} />

    </>
  );
}
}



export default connect(null, mapDispatchToProps)(CreatePostContainer);

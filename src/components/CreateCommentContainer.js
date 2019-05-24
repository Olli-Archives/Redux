import React, { PureComponent } from 'react';
import CommentsForm from './CommentsForm';
import Comments from './Comments';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';

const mapDispatchToProps = dispatch => ({
  onSubmit(postId, comment) {
    dispatch(createComment(postId, comment));
  }
});

class CreateCommentContainer extends PureComponent {

  state = {
    commentText: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { commentText } = this.state;
    this.props.onSubmit(this.props.match.params.id, commentText);
    this.setState({
      commentText: '',
    });
  }

  handleCommentChange = ({ target }) => {
    console.log('target', target.value, 'state', this.state);
    this.setState({ commentText: target.value });
  }

  render() {
    return (
      <>
        <CommentsForm commentText={this.state.commentText} handleSubmit={this.handleSubmit} handleCommentOnChange={this.handleCommentChange} />
        <Comments postId={this.props.match.params.id}/>

      </>
    );
  }
}

export default connect(null, mapDispatchToProps)(CreateCommentContainer);

import React, { PureComponent } from 'react';
import CommentsForm from './CommentsForm';
import Comments from './Comments';
import { connect } from 'react-redux';
import { createComment } from '../actions/commentActions';
import PropTypes from 'prop-types';

const mapDispatchToProps = dispatch => ({
  onSubmit(postId, comment) {
    dispatch(createComment(postId, comment));
  }
});

class CreateCommentContainer extends PureComponent {

  static propTypes ={
    onSubmit: PropTypes.func.isRequired,
    match: PropTypes.object
  }


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

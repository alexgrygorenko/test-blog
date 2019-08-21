import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPost } from '../../../actions/postsActions';
import Spinner from '../../presentational/layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from '../../presentational/post/CommentItem';

const Post = ({
  getPost,
  post: { displayedPost, loading, comments },
  match
}) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return loading || displayedPost === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <Link to="/" className="btn">
        Back To Posts
      </Link>
      <PostItem post={displayedPost} showActions={false} />
      <CommentForm postId={displayedPost.id} />
      <div className="comment">
        {comments.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            postId={displayedPost.id}
          />
        ))}
      </div>
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({ post: state.post });

export default connect(
  mapStateToProps,
  { getPost }
)(Post);

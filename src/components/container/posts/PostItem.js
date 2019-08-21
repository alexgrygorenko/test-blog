import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletePost, setPost } from '../../../actions/postsActions';

const PostItem = ({ post, deletePost, setPost, showAction }) => (
  <div className="card bg-light">
    {post.author && <h2>Author: {post.author}</h2>}
    <h3 className="text-primary text-left">{post.title}</h3>
    <div>
      <p className="my-1">{post.body}</p>
    </div>
    <p className="post-date">
      Posted on <Moment format="YYYY/MM/DD">{post.date}</Moment>
    </p>
    {showAction && (
      <p>
        <button className="btn btn-dark btn-sm" onClick={e => setPost(post)}>
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={e => deletePost(post.id)}
        >
          Delete
        </button>
        <Link to={`/posts/${post.id}`} className="btn btn-success btn-sm">
          See more...
        </Link>
      </p>
    )}
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  setPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { deletePost, setPost }
)(PostItem);

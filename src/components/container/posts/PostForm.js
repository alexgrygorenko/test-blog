import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addPost,
  updatePost,
  clearCurrent
} from '../../../actions/postsActions';

const PostForm = ({ addPost, current, updatePost, clearCurrent }) => {
  useEffect(() => {
    if (current !== null) {
      setPost({
        author: current.author,
        title: current.title,
        body: current.body
      });
    } else {
      setPost({
        author: '',
        title: '',
        body: ''
      });
    }
  }, [current]);

  const [post, setPost] = useState({
    author: '',
    title: '',
    body: ''
  });

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (!current) {
      addPost(post);
    } else {
      updatePost({ id: current.id, ...post });
    }
    clearCurrent();
    setPost({
      author: '',
      title: '',
      body: ''
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <div className="post-form">
      <div className="bg-primary p">
        <h3>{current ? 'Update Post' : 'Add Your Own Post'}</h3>
      </div>
      <form onSubmit={onSubmit} className="form my-1">
        <textarea
          name="author"
          cols="30"
          rows="1"
          placeholder="Your Name"
          value={post.author}
          onChange={onChange}
          required
        />
        <br />
        <textarea
          name="title"
          cols="30"
          rows="1"
          placeholder="Post Title"
          value={post.title}
          onChange={onChange}
          required
        />
        <br />
        <textarea
          name="body"
          cols="30"
          rows="5"
          placeholder="Post Content"
          value={post.body}
          onChange={onChange}
          required
        />
        <input
          type="submit"
          className="btn btn-dark my-1"
          value={current ? 'Update Post' : 'Add Post'}
        />
        {current && (
          <input
            type="submit"
            className="btn btn-ligth my-1"
            value="Clear"
            onClick={clearAll}
          />
        )}
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
  current: PropTypes.object,
  updatePost: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ current: state.post.current });

export default connect(
  mapStateToProps,
  { addPost, updatePost, clearCurrent }
)(PostForm);

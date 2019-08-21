import axios from 'axios';
import { setAlert } from './alertActions';
import {
  GET_POSTS,
  POST_ERROR,
  ADD_POST,
  DELETE_POST,
  SET_CURRENT,
  UPDATE_POST,
  CLEAR_CURRENT,
  GET_POST,
  ADD_COMMENT
} from './types';

// Get posts from server
export const getPosts = () => async dispatch => {
  try {
    const res = await axios.get('https://simple-blog-api.crew.red/posts');
    dispatch({
      type: GET_POSTS,
      payload: res.data.reverse()
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: 'Oops, something went wrong' }
    });
  }
};

// Add post
export const addPost = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(formData);

    const res = await axios.post(
      'https://simple-blog-api.crew.red/posts',
      body,
      config
    );

    dispatch({
      type: ADD_POST,
      payload: res.data
    });

    dispatch(setAlert('Post Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: 'Oops, something went wrong' }
    });
  }
};

// Delete post
export const deletePost = id => async dispatch => {
  try {
    await axios.delete(`https://simple-blog-api.crew.red/posts/${id}`);

    dispatch({
      type: DELETE_POST,
      payload: id
    });
    dispatch(setAlert('Post Deleted', 'danger'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: 'Oops, something went wrong' }
    });
  }
};

// Update post
export const updatePost = post => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(post);

    const res = await axios.put(
      `https://simple-blog-api.crew.red/posts/${post.id}`,
      body,
      config
    );

    dispatch({
      type: UPDATE_POST,
      payload: res.data
    });
    dispatch(setAlert('Post Updated', 'light'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: 'Oops, something went wrong' }
    });
  }
};

// Set current post
export const setPost = post => dispatch => {
  dispatch({
    type: SET_CURRENT,
    payload: post
  });
};

// Clear current post
export const clearCurrent = () => dispatch => {
  dispatch({
    type: CLEAR_CURRENT
  });
};

//Get specific post
export const getPost = postId => async dispatch => {
  try {
    const res = await axios.get(
      `https://simple-blog-api.crew.red/posts/${postId}?_embed=comments`
    );

    dispatch({
      type: GET_POST,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: 'Oops, something went wrong' }
    });
  }
};

// Add comment
export const addComment = comment => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const body = JSON.stringify(comment);

    const res = await axios.post(
      'https://simple-blog-api.crew.red/comments',
      body,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data
    });

    dispatch(setAlert('Comment Created', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: 'Oops, something went wrong' }
    });
  }
};

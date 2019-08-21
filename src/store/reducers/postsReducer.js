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
} from '../../actions/types';

const initialState = {
  posts: [],
  displayedPost: null,
  comments: null,
  current: null,
  loading: true,
  error: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case SET_CURRENT:
      return {
        ...state,
        current: payload,
        loading: false
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === payload.id ? payload : post
        ),
        loading: false
      };
    case ADD_POST:
      return {
        ...state,
        posts: [payload, ...state.posts],
        loading: false
      };
    case GET_POST:
      const { author, title, body, id, date, comments } = payload;
      return {
        ...state,
        displayedPost: {
          author,
          title,
          body,
          id,
          date
        },
        comments: comments.reverse(),
        loading: false
      };
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== payload),
        loading: false
      };
    case ADD_COMMENT:
      return {
        ...state,
        comments: [payload, ...state.comments]
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
        loading: false
      };
    default:
      return state;
  }
};

import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  post: postsReducer,
  alert: alertReducer
});

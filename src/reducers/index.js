import { combineReducers } from 'redux';
import userReducer from './userReducer';
import contentReducer from './contentReducer';

export default combineReducers({
  users: userReducer,
  contents: contentReducer,
});

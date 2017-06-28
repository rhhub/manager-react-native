import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

// state: reducer
export default combineReducers({
  auth: AuthReducer
});

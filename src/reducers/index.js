import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

// state: reducer
export default combineReducers({
  auth: AuthReducer,
  employeeForm: EmployeeFormReducer
});

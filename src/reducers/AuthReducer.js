import { EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
      // {} create new object, not pointer
      // ...state : take all values from state object
    default:
      return state;
      // no change occurs, nothing updates
  }
};

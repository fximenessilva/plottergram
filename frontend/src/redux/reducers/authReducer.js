/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function authReducer(state = {}, action = {}) {
  let newState = null;
  debugger;
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      debugger;
      newState = { ...state, user: action.user };
      break;
    case actionTypes.LOGIN_ERROR:
      debugger;
      newState = { ...state, loginError: action.loginError };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}

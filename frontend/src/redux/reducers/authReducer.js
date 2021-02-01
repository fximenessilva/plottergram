/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
  let newState = null;

  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:

      newState = { ...state, user: action.user };
      break;
    case actionTypes.LOGIN_ERROR:

      newState = { ...state, loginError: action.loginError };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}

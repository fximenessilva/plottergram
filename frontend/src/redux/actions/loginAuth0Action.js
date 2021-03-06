/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

function loginAuth0Success(user) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user,
  };
}

function loginAuth0Error(loginError) {
  return {
    type: actionTypes.LOGIN_ERROR,
    loginError,
  };
}

export default function sendUserToBack(user) {
  return async (dispatch) => {
    try {
      const checkUser = await axios.put('http://localhost:1297/user/', { user });

      dispatch(loginAuth0Success(checkUser.data));
    } catch (loginError) {
      dispatch(loginAuth0Error(loginError));
    }
  };
}

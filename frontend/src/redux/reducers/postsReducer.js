import actionTypes from '../actions/actionTypes';

export default function postsReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_POSTS:
      return { ...state, postList: action.postList };
    case actionTypes.LOAD_POSTS_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
}

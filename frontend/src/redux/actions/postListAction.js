import axios from 'axios';
import actionTypes from './actionTypes';

function requestPostListSuccess(postList) {
  return {
    type: actionTypes.LOAD_POSTS,
    postList,
  };
}

function requestProductsError(error) {
  return {
    type: actionTypes.LOAD_POSTS_ERROR,
    error,
  };
}

export default function requestPostList() {
  return async (dispatch) => {
    const postListUrl = 'http://localhost:1297/posts/';
    try {
      const posts = await axios.get(postListUrl);
      dispatch(requestPostListSuccess(posts.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

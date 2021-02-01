import { combineReducers } from 'redux';
import authReducer from './authReducer';
import postsReducer from './postsReducer';

const rootReducer = combineReducers({ authReducer, postsReducer });

export default rootReducer;

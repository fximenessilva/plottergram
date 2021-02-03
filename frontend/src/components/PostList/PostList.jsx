/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './PostList.css';
import { connect } from 'react-redux';
import requestPostList from '../../redux/actions/postListAction';
import PostCardCompo from './PostCardCompo';

function PostList({ postList, dispatch }) {
  useEffect(() => {
    if (!postList || !postList?.length) {
      dispatch(requestPostList());
    }
    if (postList) {
      console.log(postList);
    }
  });

  return (
    <div className="articles-post-wrapper">
      {postList && postList.length
    && postList.map((post) => (
      <article
        key={post._id}
        className="post-wrapper"
      >
        <PostCardCompo post={post} />
      </article>
    ))}
    </div>
  );
}

function mapStateToProps({ postsReducer }) {
  return {
    postList: postsReducer.postList,
  };
}

export default connect(mapStateToProps)(PostList);

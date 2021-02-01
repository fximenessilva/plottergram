/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import './PostList.css';
import { connect } from 'react-redux';
import requestPostList from '../../redux/actions/postListAction';

function PostList({ postList, dispatch }) {
  useEffect(() => {
    if (!postList || !postList?.length) {
      dispatch(requestPostList());
      console.log(postList);
    }
    if (postList) {
      console.log(postList);
    }
  });
  return (
    <>
      {postList && postList.length
    && postList.map((post) => (
      <article
        key={post._id}
        className="article-wrapper"
      >
        <div className="post-user-wrapper">
          <div className="post-profile-pic-wrapper">
            <img src="" alt="" />
          </div>
          <div className="post-profile-user-wrapper">
            <h4>Alexandre Frota</h4>
          </div>
        </div>
        <div className="post-img-wrapper">
          <img src={`${post.image}`} alt="" />
        </div>
        <div className="post-icons-wrapper">
          <span className="material-icons-outlined">
            favorite
          </span>
          <span className="material-icons-outlined">
            add_comment
          </span>
        </div>
        <div className="post-userProfile-description-hashtag-wrapper">
          <h4>Alexandre Frota</h4>
          <p className="post-description">{post.description}</p>
          {post.hashtags && post.hashtags.map((hashtag) => <p className="post-hashtag">{hashtag}</p>)}
        </div>
        <div className="post-comments-wrapper">
          {post.comments && post.comments.map((comment) => <p className="post-comments">{comment}</p>)}
        </div>
        <div className="post-comment-input-wrapper">
          <input type="text" className="post-comment-input" />
        </div>
        <button
          type="button"
          className="post-comment-btn"
        >
          Publish
        </button>
      </article>
    ))}

    </>
  );
}

function mapStateToProps({ postsReducer }) {
  return {
    postList: postsReducer.postList,
  };
}

export default connect(mapStateToProps)(PostList);

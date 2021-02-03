/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './PostList.css';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import PostDetail from '../PostDetail/PostDetail';

function PostCardCompo({ post }) {
  const [commentInput, setCommentInput] = useState('');
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>

      <section role="button" onClick={handleClickOpen} className="post-header-photo-section">
        <header className="post-user-wrapper">
          <div className="post-profile-pic-wrapper">
            <img className="post-profile-pic" src="https://the7.io/digital-agency/wp-content/uploads/sites/46/2018/02/gradient-slider.jpg" alt="" />
          </div>
          <div className="post-profile-user-wrapper">
            <h4 className="post-username">alexandre_frota</h4>
          </div>
        </header>
        <div className="post-img-wrapper">
          <img className="post-img" src={`${post.image}`} alt="" />
        </div>
      </section>
      <section className="post-comment-section">
        <div className="post-icons-wrapper">
          <span className="material-icons post-icon">
            favorite_border
          </span>
          <span
            role="button"
            onClick={() => document.getElementById('post-comnt-txtarea').focus()}
            className="material-icons-outlined post-icon"
          >
            add_comment
          </span>
        </div>
        <div className="post-likes">
          <span className="likes-nmbr">{post.likes}</span>
          <p className="likes-txt">likes</p>
        </div>
        <div className="post-userProfile-description-wrapper">

          <h4 className="post-author">alexandre_frota</h4>
          <p className="post-description">{post.description}</p>
        </div>
        <div className="hashtag-wrapper">
          {post.hashtags && post.hashtags.map((hashtag) => <p className="post-hashtag">{hashtag}</p>)}
        </div>
        <div className="post-comments-wrapper">
          {post.comments && post.comments.map((comment) => (
            <div className="post-author-comment">
              {' '}
              <ul className="post-usr-commentd">user1</ul>
              <ul className="post-comments">{comment}</ul>
            </div>
          ))}
        </div>
        <div className="post-comment-input-btn-wrapper">
          <textarea
            type="text"
            className="post-comment-input"
            id="post-comnt-txtarea"
            placeholder="Add your comment..."
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button
            type="button"
            className="post-comment-btn"
            disabled={!commentInput}
          >
            Publish
          </button>
        </div>
      </section>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <PostDetail id="customized-dialog-title" onClose={handleClose}>
          {post.likes}
        </PostDetail>
        {post.likes}
      </Dialog>
    </>
  );
}

export default PostCardCompo;

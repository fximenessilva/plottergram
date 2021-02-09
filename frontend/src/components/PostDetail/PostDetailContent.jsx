/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './PostDetailContent.css';

function PostDetailContent({ postDetail }) {
  console.log(postDetail);
  return (
    <>
      <article className="detail-wrapper">
        <section className="img-detail-section">
          <div className="img-detail-wrapper">
            <img src={`${postDetail.image}`} alt="" />
          </div>
        </section>
        <section className="detail-comment-section">
          <header className="detail-profile-wrapper">
            <div className="author-name-profile">
              <img className="detail-profile-pic" src="https://the7.io/digital-agency/wp-content/uploads/sites/46/2018/02/gradient-slider.jpg" alt="" />
              <h5 className="detail-author-name">larazon.es</h5>
            </div>

          </header>
          <div className="detail-description-hashtag-wrapper">
            <div className="detail-user-profile-wrapper">
              <img className="detail-profile-pic" src="https://the7.io/digital-agency/wp-content/uploads/sites/46/2018/02/gradient-slider.jpg" alt="" />
              <h5 className="detail-author-name">
                larazon.es
                <span className="detail-description">{postDetail.description}</span>
              </h5>

            </div>

            <div className="detail-hashtag-wrapper">

              <div className="detail-hashtags-wrapper">
                {postDetail.hashtags.map((hashtag) => (<span className="detail-hastag">{hashtag}</span>))}
              </div>
            </div>
            <div className="detail-comments-wrapper">
              {postDetail.comments.map((comment) => (
                <div className="detail-author-comment-wrapper">
                  <div className="detail-author-profile-pic-wrapper">
                    <img className="detail-author-profile-pic" src="https://the7.io/digital-agency/wp-content/uploads/sites/46/2018/02/gradient-slider.jpg" alt="" />
                  </div>
                  <span className="detail-author-comment">
                    alexandre_frota
                    <span className="detail-comment">{comment}</span>
                  </span>

                </div>
              ))}
            </div>

          </div>
        </section>
      </article>

    </>
  );
}

export default PostDetailContent;

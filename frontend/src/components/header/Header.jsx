/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css';
import { connect } from 'react-redux';
import Profile from './login/Profile';
// import authReducer from '../../redux/reducers/authReducer';

function Header({ user }) {
  const [homeSelected, setHomeSelected] = useState(false);
  const [likeSelected, setLikeSelected] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <>
      <nav className="header-wrapper">
        <div className="header">
          <div className="logo-header-wrapper">
            <h2 className="header-logo">Plottergram</h2>
          </div>
          <div className="searchBar-wrapper">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              className="header-searchBar"
              placeholder="&#xF002; Search"
              style={{
                fontFamily: 'Arial, FontAwesome', fontSize: '13px', fontWeight: '100', outline: 'none !important',
              }}
              onBlur={() => setInputValue('')}
            />
            <span
              className="material-icons-sharp close-searchBar-btn"
            >
              highlight_off
            </span>

          </div>

          <div className="header-icons-wrapper">
            <div className="log-btn-wrapper">
              <Profile />
            </div>
            <span
              onClick={() => setHomeSelected(!homeSelected)}
              className={homeSelected ? 'material-icons-sharp header-icon' : 'material-icons-outlined header-icon'}
            >
              home
            </span>
            <span
              onClick={() => setLikeSelected(!likeSelected)}
              className={likeSelected ? 'material-icons-sharp header-icon' : 'material-icons-outlined header-icon'}
            >
              favorite
            </span>
            <div className="header-profile-pic-wrapper header-icon">
              {user?.profilePic ? (
                <img
                  className="header-profile-pic"
                  src={`${user.profilePic}`}
                  alt="profile-pic"
                />
              ) : (
                <img
                  className="header-profile-pic"
                  src="https://the7.io/digital-agency/wp-content/uploads/sites/46/2018/02/gradient-slider.jpg"
                  alt="profile-pic"
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function mapStateToProps({ authReducer }) {
  return {
    user: authReducer.user,

  };
}

export default connect(mapStateToProps)(Header);

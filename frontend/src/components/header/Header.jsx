/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Header.css';

export default (props) => {
  const [homeSelected, setHomeSelected] = useState(false);
  const [likeSelected, setLikeSelected] = useState(false);

  const [search, setSearch] = useState('Search');
  const [searchFocus, setSearchFocus] = useState(true);

  return (
    <nav className="header-wrapper">
      <div className="header">
        <div className="logo-header-wrapper">
          <h2 className="header-logo">Plottergram</h2>
        </div>
        <div className="searchBar-wrapper">
          <input
            onFocus={() => setSearchFocus(false)}
            type="text"
            className="header-searchBar"
          />
          <p className={searchFocus ? 'header-searchBar-placeholder' : 'header-searchBar-placeholder-focus'}>{search}</p>
          <span className="material-icons input-search-icon">
            search
          </span>
        </div>
        <div className="header-icons-wrapper">
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
            <img
              className="header-profile-pic"
              src="https://pbs.twimg.com/media/Dte-xzhXgAA3qfv?format=png&name=large"
              alt="profile-pic"
              placeholder=""
            />
          </div>

        </div>
      </div>
    </nav>

  );
};

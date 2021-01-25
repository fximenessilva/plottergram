/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';

export default (props) => (
  <nav className="header-wrapper">
    <div className="header">
      <div className="header-wrapper">
        <h2 className="header-logo">Plottergram</h2>
      </div>
      <div className="searchBar-wrapper">
        <input
          type="text"
          className="header-searchBar"
          placeholder="Search"
        />
      </div>
    </div>
  </nav>
);

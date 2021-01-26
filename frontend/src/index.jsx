import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Billabong.ttf';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Auth0ProviderWithHistory from './auth0-provider-with-history';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();

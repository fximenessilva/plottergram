import React from 'react';
import ReactDOM from 'react-dom';
import './fonts/Billabong.ttf';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Auth0ProviderWithHistory from './auth0-provider-with-history';

const store = configureStore();

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <Auth0ProviderWithHistory>
          <App />
        </Auth0ProviderWithHistory>
      </Provider>
    </React.StrictMode>
  </Router>,
  document.getElementById('root'),
);

reportWebVitals();

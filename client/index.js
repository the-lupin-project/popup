import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './LandingPage/scss/application.scss';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';


render(
  <Provider store = { store } >
      <App / >
  </Provider>,
  document.getElementById('root')
);

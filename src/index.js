import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import fastclick from 'fastclick';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import registerServiceWorker from './registerServiceWorker';
import { store } from './redux/store';
import routes from './routes';
import './index.css';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

fastclick.attach(document.body, {});
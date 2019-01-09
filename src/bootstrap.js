import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore));

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import Layout from './components/layout';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Layout />
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
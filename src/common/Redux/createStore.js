/* global window */

import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './rootReducer';

const middleware = [thunk];

if (typeof window !== 'undefined') {
  const { createLogger } = require('redux-logger');
  middleware.push(createLogger({
    collapsed: true,
    duration: false,
  }));
}

export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    ),
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

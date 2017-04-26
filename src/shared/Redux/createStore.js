/* global window */

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'; // eslint-disable-line
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk];

if (typeof window !== 'undefined') {
  middleware.push(logger);
}

export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextReducer = require('./rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

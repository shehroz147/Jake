import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger'; // eslint-disable-line

import rootReducer from './rootReducer';
// import uploadSaga from './Sagas/uploadSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

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

  // Run Saga
  // sagaMiddleware.run(uploadSaga);

  return store;
};

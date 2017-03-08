/* global document, window */

import browserHistory from 'react-router/lib/browserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import polyfill from 'babel-polyfill';

import Root from '../shared/Redux/Root';
import createStore from '../shared/Redux/createStore';

const store = createStore(window.INITIAL_STATE);

browserHistory.listen(() => {
  // Do analytics here.
});

ReactDOM.render(
  <AppContainer>
    <Root history={browserHistory} store={store} />
  </AppContainer>
, document.getElementById('main'));

if (module.hot) {
  module.hot.accept('../shared/Redux/Root', () => {
    const NextRoot = require('../shared/Redux/Root').default; // eslint-disable-line global-require

    ReactDOM.render(
      <AppContainer>
        <NextRoot history={browserHistory} store={store} />
      </AppContainer>,
      document.getElementById('main'),
    );
  });
}

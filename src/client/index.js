import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../common/routes';
import rootReducer from '../common/Redux/rootReducer';
import configureStore from '../common/Redux/configureStore';

const store = configureStore(window.__PRELOADED_STATE__);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('../common/routes', () => {
    const nextRoutes = require('../common/routes').default;

    render(
      <Provider store={store}>
        <Router routes={nextRoutes} history={browserHistory} />
      </Provider>,
      document.getElementById('app')
    );
  });
}

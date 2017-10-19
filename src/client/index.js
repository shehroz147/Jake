import React from 'react';
import { render } from 'react-dom';
import { browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';

import createStore from '../common/Redux/createStore';
import routes from '../common/routes';

const store = createStore(window.__PRELOADED_STATE__);

render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('js-react'),
  () => {
    const serverSideStyles = document.getElementById('js-server-side-styles');
    serverSideStyles.parentNode.removeChild(serverSideStyles);
  }
);

if (module.hot) {
  module.hot.accept('../common/routes', () => {
    const nextRoutes = require('../common/routes').default;

    render(
      <Provider store={store}>
        <Router routes={nextRoutes} history={browserHistory} />
      </Provider>,
      document.getElementById('js-react')
    );
  });
}

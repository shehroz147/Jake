import React from 'react';
import { render } from 'react-dom';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { Provider } from 'react-redux';
import { useScroll } from 'react-router-scroll';

import createStore from '../common/Redux/createStore';
import routes from '../common/routes';

const store = createStore(window.__INITIAL_STATE__);

render(
  <Provider store={store}>
    <Router history={browserHistory} render={applyRouterMiddleware(useScroll())} routes={routes} />
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
        <Router history={browserHistory} render={applyRouterMiddleware(useScroll())} routes={nextRoutes} />
      </Provider>,
      document.getElementById('js-react')
    );
  });
}

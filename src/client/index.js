import browserHistory from 'react-router/lib/browserHistory';
import React from 'react';
import Router from 'react-router/lib/Router';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import Routes from '../shared/Routes';

render(
  <Provider>
    <Route history={browserHistory} routes={Routes} />
  </Provider>
  document.getElementById('js-react')
);

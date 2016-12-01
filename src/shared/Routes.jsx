import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Index from './components/Index';

export default (
  <Route component={AppContainer} path="/">
    <IndexRoute component={Index} />
  </Route>
)

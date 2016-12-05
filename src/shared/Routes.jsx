import React from 'react';
import { IndexRoute, Route } from 'react-router';

import AppContainer from './containers/AppContainer';
import SnapshotContainer from './containers/SnapshotContainer';

import Index from './components/Index';

export default (
  <Route component={AppContainer} path="/">
    <IndexRoute component={Index} />
    <Route component={SnapshotContainer} path="snapshot" />
  </Route>
);

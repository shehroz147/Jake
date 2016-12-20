import React from 'react';
import { IndexRoute, Route } from 'react-router';

import AppContainer from './containers/AppContainer';
import SnapshotContainer from './containers/SnapshotContainer';
import CompareContainer from './containers/CompareContainer';

import Index from './components/Index';
import Reports from './components/Reports';

export default (
  <Route component={AppContainer} path="/">
    <IndexRoute component={Index} />
    <Route component={SnapshotContainer} path="snapshot" />
    <Route component={CompareContainer} path="compare" />
    <Route component={Reports} path="reports" />
  </Route>
);

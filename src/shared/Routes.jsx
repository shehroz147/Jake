import React from 'react';
import { IndexRoute, Route } from 'react-router';

import AppContainer from './App/containers/AppContainer';
import CompareContainer from './Compare/containers/CompareContainer';

import Index from './Index/components/Index';
import Reports from './Reports/components/Reports';

export default (
  <Route component={AppContainer} path="/">
    <IndexRoute component={Index} />
    <Route component={CompareContainer} path=":trend(/:state)(/:compare)" />
    <Route component={Reports} path="reports" />
  </Route>
);

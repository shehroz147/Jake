import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App/component';
import Home from './Home/component';
import SelectContainer from './Compare/containers/container';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/compare" component={SelectContainer} />
  </Route>
);

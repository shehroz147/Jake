import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Index from './Index';
import Compare from './Compare';
import Reports from './Reports';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="/compare" component={Compare} />
    <Route path="/reports" component={Reports} />
  </Route>
);

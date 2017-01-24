import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Layout from './App/Layout';
import IndexPage from './App/IndexPage';
import Reports from './components/Reports';
import Compare from './components/Compare';
import NotFoundPage from './App/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="/reports" component={Reports} />
    <Route path="/compare" component={Compare} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;

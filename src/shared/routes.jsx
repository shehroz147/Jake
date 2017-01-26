import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Layout from './App/components/Layout';
import IndexPage from './App/components/IndexPage';
import Reports from './Reports/components/Reports';
import CompareContainer from './Compare/containers/CompareContainer';
import NotFoundPage from './App/components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="/reports" component={Reports} />
    <Route path="/compare" component={CompareContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;

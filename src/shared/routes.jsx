import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Layout from './App/components/Layout';
import IndexPage from './App/components/IndexPage';
import Reports from './Reports/components/Reports';
import CompareContainer from './Compare/containers/CompareContainer';
import NotFoundPage from './App/components/NotFoundPage';
import Login from './Admin/Login/components/Login';
import Signup from './Admin/Signup/components/Signup';
import Dashboard from './Admin/Dashboard/components/Dashboard';
import Uploader from './Admin/Uploader/containers/UploaderContainer';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="/reports" component={Reports} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/uploader" component={Uploader} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/compare" component={CompareContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;

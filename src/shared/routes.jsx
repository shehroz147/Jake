import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Layout from './App/components/Layout';
import IndexPage from './App/components/IndexPage';
import Reports from './Reports/components/Reports';
import CompareContainer from './Compare/containers/CompareContainer';
import NotFoundPage from './App/components/NotFoundPage';

// ADMIN
import Dashboard from './Admin/Dashboard/components/Dashboard';
import Login from './Admin/Forms/Login/components/Login';
import SignupContainer from './Admin/Forms/Signup/containers/SignupContainer';
import Uploader from './Admin/Forms/Uploader/containers/UploaderContainer';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="/reports" component={Reports} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/uploader" component={Uploader} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignupContainer} />
    <Route path="/compare" component={CompareContainer} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;

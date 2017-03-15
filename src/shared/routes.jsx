import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';
import Layout from './App/components/Layout';
import IndexPage from './App/components/IndexPage';
import Reports from './Reports/components/Reports';
import CompareContainer from './Compare/containers/CompareContainer';
import NotFoundPage from './App/components/NotFoundPage';

// ADMIN
import MainDashboard from './Admin/Dashboards/components/MainDashboard';
import RegistrationDashboard from './Admin/Dashboards/components/RegistrationDashboard';
import UploaderDashboard from './Admin/Dashboards/components/UploaderDashboard';
import Login from './Admin/Forms/Login/components/Login';
import Signup from './Admin/Forms/Signup/components/Signup';
import Uploader from './Admin/Forms/Uploader/containers/UploaderContainer';
import Profile from './Admin/Profile/components/Profile';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage} />
    <Route path="/compare" component={CompareContainer} />
    <Route path="/dashboard" component={MainDashboard} />
    <Route path="/registration" component={RegistrationDashboard} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="/upload" component={UploaderDashboard} />
    <Route path="/uploader" component={Uploader} />
    <Route path="/profile" component={Profile} />
    <Route path="/reports" component={Reports} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;

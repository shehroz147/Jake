import React from 'react';
import IndexRoute from 'react-router/lib/IndexRoute';
import Route from 'react-router/lib/Route';

import Layout from './App/components/Layout';
import IndexPage from './App/components/IndexPage';
import Reports from './Reports/components/Reports';
import CompareContainer from './Compare/containers/CompareContainer';
import NotFoundPage from './App/components/NotFoundPage';
import PrivacyPolicy from './PrivacyPolicy/component';
import TermsConditions from './TermsAndConditions/component';

// ADMIN
import Dashboard from './Admin/Dashboards/components/Dashboard';
import Login from './Admin/Forms/Login/components/Login';
import Logout from './App/components/Logout';
import Signup from './Admin/Forms/Signup/components/Signup';
import Uploader from './Admin/Forms/Uploader/containers/UploaderContainer';
import Profile from './Admin/Profile/components/Profile';

const routes = (
  <Route
    path="/"
    component={Layout}
    onChange={(prevState, nextState) => {
      if (nextState.location.action !== 'POP') {
        window.scrollTo(0, 0);
      }
    }}
  >
    <IndexRoute component={IndexPage} />
    <Route path="/compare" component={CompareContainer} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/logout" component={Logout} />
    <Route path="/signup" component={Signup} />
    <Route path="/uploader" component={Uploader} />
    <Route path="/profile" component={Profile} />
    <Route path="/reports" component={Reports} />
    <Route path="/privacy" component={PrivacyPolicy} />
    <Route path="/terms" component={TermsConditions} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;

import React, { PropTypes } from 'react';
import Router from 'react-router/lib/Router';
import { Provider } from 'react-redux';

import Routes from '../Routes';

const Root = (props) => {
  const {
    history,
    store,
  } = props;

  return (
    <Provider store={store}>
      <Router history={history} routes={Routes} />
    </Provider>
  );
};

Root.propTypes = {
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default Root;

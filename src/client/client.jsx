import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../shared/App/Routes';

ReactDOM.render(<Routes />, document.getElementById('main'));

if (module.hot) {
  module.hot.accept('../shared/App/Routes', () => {
    const NextRoutes = require('../shared/App/Routes').default;
    ReactDOM.render(<NextRoutes />, document.getElementById('main'));
  });
}

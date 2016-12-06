import React, { Children, PropTypes } from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

const App = props => (
  <div className="o-wrapper">
    <Navigation changeState={props.changeState} state={props.state} />

    <h1 className="o-heading-main">Civic Health Index</h1>

    {Children.only(props.children)}

    <Footer />
  </div>
);

App.propTypes = {
  changeState: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
};

export default App;

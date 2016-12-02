import React from 'react';

import Navigation from './Navigation';
import Footer from './Footer';

const App = props => (
  <div>
    <Navigation changeState={props.changeState} state={props.state} />

    <h1>Civic Health</h1>

    <Footer />
  </div>
);

App.propTypes = {};

export default App;

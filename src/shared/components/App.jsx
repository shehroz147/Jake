import React, { Children, PropTypes } from 'react';

import Navigation from './Navigation';
import Footer from './Footer';
import Trend from './Trend';

const App = props => (
  <div className="o-wrapper">
    <Navigation
      changeState={props.changeState}
      changeTrend={props.changeTrend}
      changeYear={props.changeYear}
      state={props.state}
      trend={props.trend}
      year={props.year}
    />

    <h1 className="o-heading-main">Civic Health Index</h1>
    

    {Children.only(props.children)}

    <Footer />
  </div>
);

App.propTypes = {
  changeState: PropTypes.func.isRequired,
  changeTrend: PropTypes.func.isRequired,
  changeYear: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired,
};

export default App;

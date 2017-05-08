import React from 'react';

import Trend from '../../Trend/components/Trend';

const Compare = props => (
  <div className="o-wrapper u-pv">
    <h1 className="o-heading-main u-mb0">Compare Civic Health</h1>
    <p className="u-text--">
      Use the Selects and Buttons below to compare states to the national average
      based off our specific civic trends
    </p>
    <Trend {...props} />
  </div>
);

export default Compare;

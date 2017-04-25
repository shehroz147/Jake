import React from 'react';

import Trend from '../../Trend/components/Trend';

const Compare = props => (
  <div className="o-wrapper">
    <div className="c-panel">
      <h1 className="o-heading-main">Compare Civic Health</h1>
      <Trend {...props} />
    </div>
  </div>
);

export default Compare;

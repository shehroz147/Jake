import React from 'react';

import Trend from '../../Trend/components/Trend';

const Compare = props => (
  <div className="">
    <div className="c-panel">
      <h1 className="o-heading-main">Comparison System</h1>
      <Trend {...props} />
    </div>
  </div>
);

export default Compare;

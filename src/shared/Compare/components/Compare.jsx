import React, { PropTypes } from 'react';

import Trend from '../../Trend/components/Trend';

const Compare = props => (
  <div className="c-panel">
    <div>
      <Trend {...props} />
    </div>
  </div>
);

Compare.propTypes = {};

export default Compare;

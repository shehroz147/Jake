import React, { PropTypes } from 'react';

import Trend from '../../Trend/components/Trend';
import TrendSelect from '../../Select/components/TrendSelect';

const Compare = props => (
  <div className="c-panel">
    <div>
      <h1 className="o-heading-sub u-mb">Comparison System</h1>
      <h2 className="u-mb-">Change the trend below to see more results</h2>
      <TrendSelect {...props} />
      <Trend {...props} />
    </div>
  </div>
);

Compare.propTypes = {};

export default Compare;

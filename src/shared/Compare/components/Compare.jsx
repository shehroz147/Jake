import React, { PropTypes } from 'react';

import Trend from '../../Trends/components/Trend';

const Compare = props => (
  <div>
    <div>
      <h1>Compare</h1>
      <Trend {...props} />
    </div>
  </div>
);

Compare.propTypes = {
  data: PropTypes.shape({}),
};

export default Compare;

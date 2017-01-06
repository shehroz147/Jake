import React, { PropTypes } from 'react';

import CompareSelect from './Select/CompareSelect';

import Trend from './Trend';

const Compare = (props) => {

  return (
    <div>
      <div>
        <h1>Compare</h1>
        <CompareSelect {...props} />
        <Trend {...props} />
        <Trend {...props} />
      </div>
    </div>
  );
};

Compare.propTypes = {
  data: PropTypes.shape({}),
};

export default Compare;

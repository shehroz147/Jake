import React from 'react';

import CompareSelect from '../../Select/components/CompareSelect';

const NoTrend = props => (
  <div>
    <CompareSelect {...props} />
    <h1 className="o-heading-sub u-text-center u-mv+">
      No Data Try Selecting another Trend
    </h1>
  </div>
);

export default NoTrend;

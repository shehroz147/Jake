import React from 'react';

import CompareSelect from '../../Select/components/CompareSelect';
import Chart from '../../Graph/components/Chart';

const NoTrend = props => (
  <div className="o-layout">

    <div className="o-layout__item">
      <CompareSelect {...props} />
    </div>

    {/* <div className="o-layout__item u-p0">
      <Chart {...props} />
    </div> */}

    <div className="o-layout__item u-p0">
      <h1 className="o-heading-sub u-text-center u-mv+">
        Our Data is incomplete for this Trend or Year. Try Selecting another Trend or Year.
      </h1>

    </div>
  </div>
);

export default NoTrend;

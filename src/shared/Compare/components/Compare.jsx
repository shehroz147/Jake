import React from 'react';

import CompareSelect from '../../Select/components/CompareSelect';
import TrendContainer from '../../Trend/container/TrendContainer';

const Compare = props => (
  <div className="c-panel">
    <div className="c-panel__head">
      <h1 className="c-panel__heading">Compare States</h1>
    </div>
    <div className="c-panel__content">
      <div>
        <CompareSelect {...props} />
        <TrendContainer {...props} />
      </div>
    </div>
  </div>
);


export default Compare;

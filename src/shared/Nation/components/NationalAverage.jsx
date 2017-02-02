import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const NationalAverage = (props) => (
  <div className="">
    <div classNae="c-panel o-layout">
      <div className="c-panel__head">
        <h1 className="c-panel__heading">National Average</h1>
      </div>
      <div className="c-panel__content">
        <BarGraph percentage={props.volunteerPercent} />
      </div>
    </div>
  </div>
);

NationalAverage.propTypes = {};

export default NationalAverage;

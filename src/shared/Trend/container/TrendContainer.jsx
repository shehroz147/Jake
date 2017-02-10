import React, { PropTypes } from 'react';

import ChangeTrendButton from '../../Select/components/ChangeTrendButton';
import Trend from '../components/Trend';

const TrendContainer = props => (
  <div className="">
    <div className="">
      <div className="">
        <ChangeTrendButton {...props} />
        <Trend {...props} />
      </div>
    </div>
  </div>
);

TrendContainer.propTypes = {
  trend: PropTypes.string.isRequired,
};

export default TrendContainer;

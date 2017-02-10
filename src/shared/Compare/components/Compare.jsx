import React, { PropTypes } from 'react';

// import CompareSelect from '../../Select/components/CompareSelect';
import ChangeTrendButton from '../../Select/components/ChangeTrendButton';
import TrendContainer from '../../Trend/container/TrendContainer';

const Compare = props => (
  <div className="c-panel">
    <div className="c-panel__head">
      {/* <h1 className="o-heading-main"><ChangeTrendButton {...props} /></h1> */}
    </div>
    <div className="">
      <div>
        {/* <CompareSelect {...props} /> */}
        <TrendContainer {...props} />
      </div>
    </div>
  </div>
);

Compare.propTypes = {
  trend: PropTypes.string.isRequired,
};

export default Compare;

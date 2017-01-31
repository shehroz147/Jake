import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Boycotted = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.productPercent || !compareData.productPercent) {
    return (
      <div className="c-panel__head">
        <p className="c-panel__heading">
          No data for a selected States or Trend nothing to compare
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="c-panel">
        <div className="c-panel__content">
          <div className="c-panel__head">
            <h2 className="c-panel__heading">{data.state}</h2>
          </div>
          <BarGraph
            percentage={data.productPercent}
          />
          <h3 className="c-panel__heading">Rank - {data.productRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.productPercent} />}
            <h3 className="c-panel__heading">Rank - {compareData.productRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Boycotted.propTypes = {
  compareData: PropTypes.shape({
    productPercent: PropTypes.number.isRequired,
    productRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    productPercent: PropTypes.number.isRequired,
    productRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Boycotted;

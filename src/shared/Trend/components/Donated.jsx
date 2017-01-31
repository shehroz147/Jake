import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Donated = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.donatedPercent || !compareData.donatedPercent) {
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
            percentage={data.donatedPercent}
          />
          <h3 className="c-panel__heading">Rank - {data.donatedRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.donatedPercent} />}
            <h3 className="c-panel__heading">Rank - {compareData.donatedRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Donated.propTypes = {
  compareData: PropTypes.shape({
    donatedPercent: PropTypes.number.isRequired,
    donatedRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    donatedPercent: PropTypes.number.isRequired,
    donatedRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Donated;

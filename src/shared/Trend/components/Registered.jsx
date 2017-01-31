import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Registered = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.votePercent || !compareData.votePercent) {
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
            percentage={data.votePercent}
          />
          <h3 className="c-panel__heading">Rank - {data.voteRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.votePercent} />}
            <h3 className="c-panel__heading">Rank - {compareData.voteRank}</h3>
          </div>
        </div>
      </div>
    </div>

  );
};

Registered.propTypes = {
  compareData: PropTypes.shape({
    productPercent: PropTypes.number.isRequired,
    productRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    votePercent: PropTypes.number.isRequired,
    voteRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Registered;

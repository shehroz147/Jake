import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Contacted = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.contactedPercent) {
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
            percentage={data.contactedPercent}
          />
          <h3 className="c-panel__heading">Rank - {data.contactedRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.contactedPercent} />}
            <h3 className="c-panel__heading">Rank - {compareData.contactedRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Contacted.propTypes = {
  compareData: PropTypes.shape({
    contactedPercent: PropTypes.number.isRequired,
    contactedRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    contactedPercent: PropTypes.number.isRequired,
    contactedRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Contacted;

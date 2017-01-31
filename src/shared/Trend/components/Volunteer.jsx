import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Volunteer = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.volunteerPercent || !compareData.volunteerPercent) {
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
            percentage={data.volunteerPercent}
          />
          <h3 className="c-panel__heading">Rank - {data.volunteerRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.volunteerPercent} />}
            <h3 className="c-panel__heading">Rank - {compareData.volunteerRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Volunteer.propTypes = {
  compareData: PropTypes.shape({
    productPercent: PropTypes.number.isRequired,
    productRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    volunteerPercent: PropTypes.number.isRequired,
    volunteerRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Volunteer;

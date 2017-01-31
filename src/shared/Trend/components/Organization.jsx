import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Organization = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.organizationPercent || !compareData.organizationPercent) {
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
            percentage={data.organizationPercent}
          />
          <h3 className="c-panel__heading">Rank - {data.organizationRank}</h3>
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

Organization.propTypes = {
  compareData: PropTypes.shape({
    organizationPercent: PropTypes.number.isRequired,
    organizationRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    organizationPercent: PropTypes.number.isRequired,
    organizationRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Organization;

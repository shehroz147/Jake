import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Group = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.groupPercent || !compareData.groupPercent) {
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
            percentage={data.groupPercent}
          />
          <h3 className="c-panel__heading">Rank - {data.groupRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.groupPercent} />}
            <h3 className="c-panel__heading">Rank - {compareData.groupRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Group.propTypes = {
  compareData: PropTypes.shape({
    groupPercent: PropTypes.number.isRequired,
    groupRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    groupPercent: PropTypes.number.isRequired,
    groupRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Group;

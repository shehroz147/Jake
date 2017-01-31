import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Meeting = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.meetingPercent || !compareData.meetingPercent) {
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
            percentage={data.meetingPercent}
          />
          <h3 className="c-panel__heading">Rank - {data.meetingRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.meetingPercent} />}
            <h3>Rank - {compareData.meetingRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Meeting.propTypes = {
  compareData: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default Meeting;

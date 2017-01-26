import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Meeting = (props) => {
  const { data } = props;

  if (!data.meetingPercent) {
    return (
      <div className="c-panel__head">
        <p>No data for this trend</p>
      </div>
    );
  }

  return (
    <div className="c-panel">
      <div className="c-panel__content">
        <BarGraph
          percentage={data.meetingPercent}
        />
        <h3>Rank - {data.meetingRank}</h3>
      </div>
    </div>
  );
};

Meeting.propTypes = {
  data: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }),
};

export default Meeting;

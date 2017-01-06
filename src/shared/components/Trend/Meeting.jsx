import React, { PropTypes } from 'react';

import Graph from '../Graph';
import Trend from '../Select/Trend';

const Meeting = (props) => {
  const { data } = props;

  if (!data.meetingPercent) {
    return <div className="c-panel__head">
      <h2 className="c-panel__heading"><Trend {...props} /></h2>
      <p>No data for this trend</p>
    </div>;
  }

  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading"><Trend {...props} /></h2>
      </div>
      <div className="c-panel__content">
        <Graph
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

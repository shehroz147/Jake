import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Meeting = (props) => {
  const { data } = props;
  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Attended a Public Meeting</h2>
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
  data: PropTypes.obj,
};

export default Meeting;

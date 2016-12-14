import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Registered = (props) => {
  const { data } = props;

  if (!data.votePercent) {
    return <p>No Data</p>;
  }

  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Registered to Vote</h2>
      </div>
      <div className="c-panel__content">
        <Graph
          percentage={data.votePercent}
        />
        <h3>Rank - {data.voteRank}</h3>
      </div>
    </div>
  );
};

Registered.propTypes = {
  data: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }),
};

export default Registered;

import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Contacted = (props) => {
  const { data } = props;

  if (!data.communityPercent) {
    return <p>No Data</p>;
  }

  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Contacted or Visited a Public Official</h2>
      </div>
      <div className="c-panel__content">
        <Graph
          percentage={data.contactedPercent}
        />
        <h3>Rank - {data.contactedRank}</h3>
      </div>
    </div>
  );
};

Contacted.propTypes = {
  data: PropTypes.shape({
    meetingPercent: PropTypes.number.isRequired,
    meetingRank: PropTypes.number.isRequired,
  }),
};

export default Contacted;

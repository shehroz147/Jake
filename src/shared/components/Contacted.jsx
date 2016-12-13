import React, { PropTypes } from 'react';

import Graph from './Graph';

const Contacted = props => {
  const { data } = props;
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

Contacted.propTypes = {};

export default Contacted;

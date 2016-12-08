import React, { PropTypes } from 'react';

import Graph from './Graph';

const Community = props => {
  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Worked with Neighbors to Fix a Community Problem</h2>
      </div>
      <div className="c-panel__content">
        <Graph
          percentage={data.communityPercent}
        />
        <h3>Rank - {data.communityRank}</h3>
      </div>
    </div>
  );
};

Community.propTypes = {};

export default Community;

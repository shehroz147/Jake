import React, { PropTypes } from 'react';

import Graph from './Graph';

const Group = props => {
  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Belongs to a Community Group</h2>
      </div>
      <div className="c-panel__content">
        <Graph
          percentage={data.groupPercent}
        />
        <h3>Rank - {data.groupRank}</h3>
      </div>
    </div>
  );
};

Group.propTypes = {};

export default Group;

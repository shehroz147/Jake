import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Donated = (props) => {
  const { data } = props;
  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Belongs to a Community Group</h2>
      </div>
      <div className="c-panel__content">
        <Graph
          percentage={data.donatedPercent}
        />
        <h3>Rank - {data.donatedRank}</h3>
      </div>
    </div>
  );
};

Donated.propTypes = {
  data: PropTypes.obj,
};

export default Donated;

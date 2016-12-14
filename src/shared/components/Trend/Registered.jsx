import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Registered = (props) => {
  const { data } = props;
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
  data: PropTypes.obj,
};

export default Registered;

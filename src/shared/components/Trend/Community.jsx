import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Community = (props) => {
  const { data } = props;

  if (!data.communityPercent) {
    return <p>No Data</p>;
  }

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

Community.propTypes = {
  data: PropTypes.shape({
    communityPercent: PropTypes.number.isRequired,
    communityRank: PropTypes.number.isRequired,
  }),
};

export default Community;

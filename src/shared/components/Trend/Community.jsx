import React, { PropTypes } from 'react';

import Graph from '../Graph';
import Trend from '../Select/Trend';

const Community = (props) => {
  const { data } = props;

  if (!data.communityPercent) {
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

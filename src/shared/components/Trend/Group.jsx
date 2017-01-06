import React, { PropTypes } from 'react';

import Graph from '../Graph';
import Trend from '../Select/Trend';

const Group = (props) => {
  const { data } = props;

  if (!data.groupPercent) {
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
          percentage={data.groupPercent}
        />
        <h3>Rank - {data.groupRank}</h3>
      </div>
    </div>
  );
};

Group.propTypes = {
  data: PropTypes.shape({
    groupPercent: PropTypes.number.isRequired,
    groupRank: PropTypes.number.isRequired,
  }),
};

export default Group;

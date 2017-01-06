import React, { PropTypes } from 'react';

import Graph from '../Graph';
import Trend from '../Select/Trend';

const Donated = (props) => {
  const { data } = props;

  if (!data.donatedPercent) {
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
          percentage={data.donatedPercent}
        />
        <h3>Rank - {data.donatedRank}</h3>
      </div>
    </div>
  );
};

Donated.propTypes = {
  data: PropTypes.shape({
    donatedPercent: PropTypes.number.isRequired,
    donatedRank: PropTypes.number.isRequired,
  }),
};

export default Donated;

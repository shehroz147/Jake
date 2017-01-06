import React, { PropTypes } from 'react';

import Graph from '../Graph';
import Trend from '../Select/Trend';

const Boycotted = (props) => {
  const { data } = props;

  if (!data.productPercent) {
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
          percentage={data.productPercent}
        />
        <h3>Rank - {data.productRank}</h3>
      </div>
    </div>
  );
};

Boycotted.propTypes = {
  data: PropTypes.shape({
    productPercent: PropTypes.number.isRequired,
    productRank: PropTypes.number.isRequired,
  }),
};

export default Boycotted;

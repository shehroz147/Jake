import React, { PropTypes } from 'react';

import Graph from '../Graph';
import Trend from '../Select/Trend';

const Contacted = (props) => {
  const { data } = props;

  if (!data.contactedPercent) {
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
          percentage={data.contactedPercent}
        />
        <h3>Rank - {data.contactedRank}</h3>
      </div>
    </div>
  );
};

Contacted.propTypes = {
  data: PropTypes.shape({
    contactedPercent: PropTypes.number.isRequired,
    contactedRank: PropTypes.number.isRequired,
  }),
};

export default Contacted;

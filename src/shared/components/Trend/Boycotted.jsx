import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Boycotted = (props) => {
  const { data } = props;

  if (!data.productPercent) {
    return <p>No Data</p>;
  }

  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Bought or boycotted a product</h2>
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

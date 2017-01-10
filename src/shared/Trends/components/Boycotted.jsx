import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';
import Trend from '../../Select/components/Trend';

const Boycotted = (props) => {
  const {
    compareData,
    data,
  } = props;

  console.log(props);

  if (!data.productPercent) {
    return (
      <div className="c-panel__head">
        <h2 className="c-panel__heading"><Trend {...props} /></h2>
        <p>No data for this trend</p>
      </div>
    );
  }

  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading"><Trend {...props} /></h2>
      </div>
      <div className="c-panel__content">
        <BarGraph
          percentage={data.productPercent}
        />
        <h3>Rank - {data.productRank}</h3>

        {compareData && <BarGraph percentage={compareData.productPercent} />}
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

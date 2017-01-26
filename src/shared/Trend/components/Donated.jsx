import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';


const Donated = (props) => {
  const { data } = props;

  if (!data.donatedPercent) {
    return (
      <div className="c-panel__head">
        <p>No data for this trend</p>
      </div>
    );
  }

  return (
    <div className="c-panel">
      <div className="c-panel__content">
        <BarGraph
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

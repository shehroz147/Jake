import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';
import Trend from '../../Select/components/Trend';

const Registered = (props) => {
  const { data } = props;

  if (!data.votePercent) {
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
        <BarGraph
          percentage={data.votePercent}
        />
        <h3>Rank - {data.voteRank}</h3>
      </div>
    </div>
  );
};

Registered.propTypes = {
  data: PropTypes.shape({
    votePercent: PropTypes.number.isRequired,
    voteRank: PropTypes.number.isRequired,
  }),
};

export default Registered;

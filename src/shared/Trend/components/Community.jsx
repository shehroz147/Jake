import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';
import Trend from '../../Select/components/Trend';

const Community = (props) => {
  const { data } = props;

  if (!data.communityPercent) {
    return (
      <div className="c-panel__head">
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

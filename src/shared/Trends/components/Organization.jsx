import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';
import Trend from '../../Select/components/Trend';

const Organization = (props) => {
  const { data } = props;

  if (!data.organizationPercent) {
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
          percentage={data.organizationPercent}
        />
        <h3>Rank - {data.organizationRank}</h3>
      </div>
    </div>
  );
};

Organization.propTypes = {
  data: PropTypes.shape({
    organizationPercent: PropTypes.number.isRequired,
    organizationRank: PropTypes.number.isRequired,
  }),
};

export default Organization;

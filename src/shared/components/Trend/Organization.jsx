import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Organization = (props) => {
  const { data } = props;

  if (!data.organizationPercent) {
    return <p>No Data</p>;
  }

  return (
    <div className="c-panel">
      <div className="c-panel__head">
        <h2 className="c-panel__heading">Belongs to a Civic Organization</h2>
      </div>
      <div className="c-panel__content">
        <Graph
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

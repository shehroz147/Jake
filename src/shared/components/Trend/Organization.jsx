import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Organization = (props) => {
  const { data } = props;
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
  data: PropTypes.obj,
};

export default Organization;

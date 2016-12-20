import React, { PropTypes } from 'react';

import Graph from '../Graph';

const Volunteer = (props) => {
  const { data } = props;

  if (!data.volunteerPercent) {
    return <p>No Data</p>;
  }

  return (
    <div>
      <div className="c-panel">
        <div className="c-panel__head">
          <h2 className="c-panel__heading">Volunteered</h2>
        </div>
        <div className="c-panel__content">
          <Graph
            percentage={data.volunteerPercent}
          />
          <h3>Rank - {data.volunteerRank}</h3>
        </div>
      </div>
    </div>
  );
};

Volunteer.propTypes = {
  data: PropTypes.shape({
    volunteerPercent: PropTypes.number.isRequired,
    volunteerRank: PropTypes.number.isRequired,
  }),
};

export default Volunteer;

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
        <div className="c-panel">
          <div className="c-panel__head">
            <h2 className="c-panel__heading">Hours Volunteered per capita</h2>
          </div>
          <div className="c-panel__content">
            <Graph
              percentage={data.volunteerHours}
            />
            <h3>Rank - {data.volunteerHoursRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Volunteer.propTypes = {
  data: PropTypes.shape({
    volunteerHoursPercent: PropTypes.number.isRequired,
    volunteerHoursRank: PropTypes.number.isRequired,
  }),
};

export default Volunteer;

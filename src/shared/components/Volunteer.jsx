import React, { PropTypes } form 'react';

import Graph from './Graph';

const Volunteer = props => {
  return (
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
  );
};

Volunteer.propTypes = {};

export default Volunteer;

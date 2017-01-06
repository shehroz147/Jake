import React, { PropTypes } from 'react';

import Graph from '../Graph';
import Trend from '../Select/Trend';

const Volunteer = (props) => {
  const { data } = props;

  if (!data.volunteerPercent) {
    return <div className="c-panel__head">
      <h2 className="c-panel__heading"><Trend {...props} /></h2>
      <p>No data for this trend</p>
    </div>;
  }

  return (
    <div>
      <div className="c-panel">
        <div className="c-panel">
          <div className="c-panel__head">
            <h2 className="c-panel__heading"><Trend {...props} /></h2>
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

import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const Volunteer = (props) => {
  const { data } = props;

  if (!data.volunteerPercent) {
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
          percentage={data.volunteerHours}
        />
        <h3>Rank - {data.volunteerHoursRank}</h3>
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

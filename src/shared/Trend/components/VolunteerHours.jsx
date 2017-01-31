import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';

const VolunteerHours = (props) => {
  const {
    compareData,
    data,
  } = props;

  if (!data.volunteerHours || !compareData.volunteerHours) {
    return (
      <div className="c-panel__head">
        <p className="c-panel__heading">
          No data for a selected States or Trend nothing to compare
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="c-panel">
        <div className="c-panel__content">
          <div className="c-panel__head">
            <h2 className="c-panel__heading">{data.state}</h2>
          </div>
          <BarGraph
            percentage={data.volunteerHours}
          />
          <h3 className="c-panel__heading">Rank - {data.volunteerHoursRank}</h3>
        </div>
      </div>
      <div>
        <div className="c-panel">
          <div className="c-panel__content">
            <div className="c-panel__head">
              <h2 className="c-panel__heading">{compareData.state}</h2>
            </div>
            {compareData && <BarGraph percentage={compareData.volunteerHours} />}
            <h3 className="c-panel__heading">Rank - {compareData.volunteerHoursRank}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

VolunteerHours.propTypes = {
  compareData: PropTypes.shape({
    volunteerHours: PropTypes.number.isRequired,
    volunteerHoursRank: PropTypes.number.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    volunteerHours: PropTypes.number.isRequired,
    volunteerHoursRank: PropTypes.number.isRequired,
  }).isRequired,
};

export default VolunteerHours;

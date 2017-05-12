import React from 'react';
import PropTypes from 'prop-types';

const TrendSelect = props => (
  <select
    className="c-select"
    onChange={(event) => {
      const trend = event.target.value;
      props.changeTrend(trend);
    }}
    value={props.trend}
  >
    <option value="volunteer">Volunteered</option>
    <option value="volunteerHours">Volunteer Hours per Capita</option>
    <option value="meeting">Attended a Public Meeting</option>
    <option value="community">Worked with Neighbors to Fix Community Problem</option>
    <option value="donated">Donated Money to a Charity</option>
    <option value="boycotted">Bought or boycotted a product</option>
    <option value="registered">Registered to Vote</option>
    <option value="contacted">Contacted or Visited a Public Official</option>
    <option value="group">Belongs to a Community Group</option>
    <option value="organization">Belongs to a Civic Organization</option>
  </select>
);

TrendSelect.propTypes = {
  changeTrend: PropTypes.func.isRequired,
  trend: PropTypes.string.isRequired,
};

export default TrendSelect;

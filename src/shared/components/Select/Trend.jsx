import React, { PropTypes } from 'react';

const Trend = props => (

  <div className="container">
    <div className="col small-third">
      <select
        className="c-select"
        onChange={(event) => {
          const trend = event.target.value;
          props.changeTrend(trend);
        }}
        value={props.trend}
      >
        <option value="volunteer">Volunteering</option>
        <option value="meeting">Attended a Public Meeting</option>
        <option value="community">Worked with Neighbors to Fix Community Problem</option>
        <option value="donated">Donated Money to a Charity</option>
        <option value="boycotted">Bought or boycotted a product</option>
        <option value="registered">Registered to Vote</option>
        <option value="contacted">Contacted or Visited a Public Official</option>
        <option value="group">Belongs to a Community Group</option>
        <option value="organization">Belongs to a Civic Organization</option>
      </select>
    </div>
  </div>
);

Trend.propTypes = {
  changeTrend: PropTypes.func,
  trend: PropTypes.string,
};

export default Trend;

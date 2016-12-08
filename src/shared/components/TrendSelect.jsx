import React, { PropTypes } from 'react';

const TrendSelect = (props) => (
  <div>
    <select
      className="c-select"
      onChange={(event) => {
        const trend = event.target.value;
        props.changeTrend(trend);
      }}
      value={props.trend}
    >
      <option value="volunteer">Volunteering</option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
      <option value=""></option>
    </select>
  </div>
);

TrendSelect.propTypes = {
  changeTrend: PropTypes.func,
  trend: PropTypes.string,
};

export default TrendSelect;

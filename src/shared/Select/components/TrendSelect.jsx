import React, { PropTypes } from 'react';

const trends = [
  'volunteer',
  'volunteerHours',
  'meeting',
  'donated',
  'boycotted',
  'registered',
  'group',
  'organization',
];

const TrendSelect = (props) => {
  return (
    <div className="">


      <select
        className="c-select o-list-inline__item"
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

      <button
        className="c-button o-list-inline__item"
        onClick={() => {
          let index = trends.indexOf(props.trend) - 1;
          if (index <= 0) {
            index = trends.length - 1;
          }

          const prevTrend = trends[index];
          props.changeTrend(prevTrend);
        }}
      >
          Prev Trend
        </button>

      <button
        className="c-button o-list-inline__item"
        onClick={() => {
          let index = trends.indexOf(props.trend) + 1;
          if (index >= trends.length - 1) {
            index = 0;
          }

          const nextTrend = trends[index];
          props.changeTrend(nextTrend);
        }}
        type="button"
        value={props.trend}
      >
        Next Trend
      </button>

    </div>
  );
};
TrendSelect.propTypes = {
  changeTrend: PropTypes.func.isRequired,
  trend: PropTypes.string.isRequired,
};

export default TrendSelect;

import React from 'react';
import PropTypes from 'prop-types';
import TrendSelect from './TrendSelect';

const trends = [
  'volunteer',
  'volunteerHours',
  'meeting',
  'community',
  'donated',
  'voted',
  'boycotted',
  'registered',
  'group',
  'organization',
];

// const TREND_TITLES = {
//   volunteer: 'Volunteered',
//   volunteerHours: 'Hours Volunteered per capita',
//   meeting: 'Percent Attended a Public Meeting',
//   community: 'Percent Worked with Neighbors to Fix a Community Problem',
//   donated: 'Percent Donated Money to a Charity',
//   voted: 'Percent Voted',
//   boycotted: 'Voters Bought Boycotted Products',
//   registered: 'Percent Registered to Vote',
//   group: 'Belongs to a Community Group',
//   organization: 'Belongs to a Civic Organization',
// };
// {TREND_TITLES[props.trend]}

const ChangeTrendButton = props => (
  <div className="o-flex-layout">
    <div className="o-flex-layout__item o-flex-layout__item--shrink">
      <button
        className="c-button"
        onClick={() => {
          let index = trends.indexOf(props.trend) - 1;
          if (index < 0) {
            index = trends.length - 1;
          }

          const prevTrend = trends[index];
          props.changeTrend(prevTrend);
        }}
      >
        &larr;
      </button>
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--grow u-text-center u-p0">
      <TrendSelect {...props} />
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--shrink u-p0">
      <button
        className="c-button"
        onClick={() => {
          let index = trends.indexOf(props.trend) + 1;
          if (index >= trends.length) {
            index = 0;
          }

          const nextTrend = trends[index];
          props.changeTrend(nextTrend);
        }}
        type="button"
        value={props.trend}
      >
        &rarr;
      </button>
    </div>
  </div>
);

ChangeTrendButton.propTypes = {
  changeTrend: PropTypes.func.isRequired,
  trend: PropTypes.string.isRequired,
};

export default ChangeTrendButton;

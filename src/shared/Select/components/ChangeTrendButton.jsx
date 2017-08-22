import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'wolfshark';
import TrendSelect from './TrendSelect';
import trends from '../constants/trends';

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
      <Button
        color="primary"
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
      </Button>
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--grow u-text-center u-p0">
      <TrendSelect {...props} />
    </div>
    <div className="o-flex-layout__item o-flex-layout__item--shrink u-p0">
      <Button
        color="primary"
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
      </Button>
    </div>
  </div>
);

ChangeTrendButton.propTypes = {
  changeTrend: PropTypes.func.isRequired,
  trend: PropTypes.string.isRequired,
};

export default ChangeTrendButton;

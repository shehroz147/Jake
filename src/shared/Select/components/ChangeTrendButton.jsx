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

const ChangeTrendButton = props => (
  <div className="o-layout">
    <div className="o-layout__item u-1/2">
      <button
        className="c-button c-button--block"
        onClick={() => {
          let index = trends.indexOf(props.trend) - 1;
          if (index < 0) {
            index = trends.length - 1;
          }

          const prevTrend = trends[index];
          props.changeTrend(prevTrend);
        }}
      >
        &larr; Previous Trend
      </button>
    </div>
    <div className="o-layout__item u-1/2">
      <button
        className="c-button c-button--block"
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
        Next Trend &rarr;
      </button>
    </div>
  </div>
);

ChangeTrendButton.propTypes = {
  changeTrend: PropTypes.func.isRequired,
  trend: PropTypes.string.isRequired,
};

export default ChangeTrendButton;

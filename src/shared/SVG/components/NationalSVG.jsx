import React from 'react';
import PropTypes from 'prop-types';
import ChangeStateButton from '../../Select/components/ChangeStateButton';

export const TREND_PERCENT = {
  volunteer: 'volunteerPercent',
  volunteerHours: 'volunteerHours',
  meeting: 'meetingPercent',
  community: 'communityPercent',
  donated: 'donatedPercent',
  voted: 'votePercent',
  boycotted: 'productPercent',
  registered: 'registeredPercent',
  group: 'groupPercent',
  organization: 'organizationPercent',
};

export const TREND_RANK = {
  volunteer: 'volunteerRank',
  volunteerHours: 'volunteerHoursRank',
  meeting: 'meetingRank',
  community: 'communityRank',
  donated: 'donatedRank',
  voted: 'voteRank',
  boycotted: 'productRank',
  registered: 'registeredRank',
  group: 'groupRank',
  organization: 'organizationRank',
};

const SVGChart = (props) => {

  const {
    trend,
    state,
  } = props;

  const stateSvg = `/img/States/${state.state}.svg`;

  const statenum1 = props.state[TREND_PERCENT[trend]];

  const statenum2 = 100 - props.state[TREND_PERCENT[trend]];

  const statenums = [
    statenum1,
    statenum2,
  ];

  return (
    <div className="o-layout">
      <div className="o-layout__item">
        <figure className="o-layout">

          <div className="o-layout__item u-1/2">
            <h1 className="o-layout__item">{state.state}</h1>
            <object type="image/svg+xml" data={stateSvg}>
              <img className="svg" alt="state outline" src={stateSvg} />
            </object>
          </div>

          <div className="figure-content o-layout__item u-1/2">

            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut" aria-labelledby="beers-title beers-desc" role="img">

              <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f7f7f7" strokeWidth="3" role="presentation" />

              <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#c0ffee" strokeWidth="3" strokeDasharray={statenums} strokeDashoffset="25" />


              <g className="chart-text">
                <text x="50%" y="50%" className="chart-number">
                  {props.state[TREND_PERCENT[trend]]}%
                </text>
              </g>

            </svg>

          </div>
        </figure>
      </div>
    </div>
  );
};


SVGChart.propTypes = {};

export default SVGChart;

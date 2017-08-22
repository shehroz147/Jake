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

const SVGChart = props => {

  const {
    trend,
    state,
    state1,
    state2,
    changeState1,
    changeState2,
  } = props;

  const stateSvg = `/img/States/${state.state}.svg`;
  const state1Svg = `/img/States/${state1.state}.svg`;
  const state2Svg = `/img/States/${state2.state}.svg`;

  const statenum1 = props.state[TREND_PERCENT[trend]];
  const statenum2 = 100 - props.state[TREND_PERCENT[trend]];

  const state1num1 = props.state1[TREND_PERCENT[trend]];
  const state1num2 = 100 - props.state1[TREND_PERCENT[trend]];

  const state2num1 = props.state2[TREND_PERCENT[trend]];
  const state2num2 = 100 - props.state2[TREND_PERCENT[trend]];

  const statenums = [
    statenum1,
    statenum2,
  ];

  const state1nums = [
    state1num1,
    state1num2,
  ];
  const state2nums = [
    state2num1,
    state2num2,
  ];

  return (
    <div className="o-layout">
        <div className="c-panel__content o-layout__item u-text-right">
          <div className="o-layout__item u-1/2">
            <ChangeStateButton
              className="o-layout__item"
              changeState={changeState1}
              state={state1.state}
            />
          </div>
          <div className="o-layout__item u-1/2">
            <ChangeStateButton
              className="o-layout__item"
              changeState={changeState2}
              state={state2.state}
            />
          </div>
        </div>
      <div className="o-layout__item  u-1/2">
        <figure className="o-layout">
          <div className="o-layout__item u-1/2">
            {/* <h1 className="o-layout__item">{state1.state}</h1> */}
            <object type="image/svg+xml" data={state1Svg}>
              <img className="svg" alt="state outline" src={state1Svg} />
            </object>
          </div>
          <div className="figure-content o-layout__item u-1/2">
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut" aria-labelledby="beers-title beers-desc" role="img">

              <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f7f7f7" strokeWidth="3" role="presentation" />

              <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#c0ffee" strokeWidth="3" strokeDasharray={state1nums} strokeDashoffset="25" />


              <g className="chart-text">
                <text x="50%" y="50%" className="chart-number">
                  {props.state1[TREND_PERCENT[trend]]}%
                </text>
              </g>
            </svg>
            <h3 className="o-layout__item u-text-right">
              Rank - {state1[TREND_RANK[trend]]}
            </h3>
          </div>
        </figure>
      </div>

      <div className="o-layout__item  u-1/2">
        <figure className="o-layout">
          <div className="o-layout__item u-1/2">
            <object type="image/svg+xml" data={state2Svg}>
              <img alt="state outline" src={state2Svg} />
            </object>
          </div>
          <div className="figure-content o-layout__item u-1/2">
            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut" aria-labelledby="beers-title beers-desc" role="img">

              <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#f7f7f7" strokeWidth="3" role="presentation" />

              <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#c0ffee" strokeWidth="3" strokeDasharray={state2nums} strokeDashoffset="25" />


              <g className="chart-text">
                <text x="50%" y="50%" className="chart-number">
                  {props.state2[TREND_PERCENT[trend]]}%
                </text>
              </g>
            </svg>
            <h3 className="o-layout__item u-text-right">
              Rank - {state2[TREND_RANK[trend]]}
            </h3>
          </div>
        </figure>
      </div>


    </div>
  );
};


SVGChart.propTypes = {};

export default SVGChart;

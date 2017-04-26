import React, { PropTypes } from 'react';

import BarGraph from '../../Graph/components/BarGraph';
import Chart from '../../Graph/components/Chart';
import NoTrend from './NoTrend';
import ChangeStateButton from '../../Select/components/ChangeStateButton';

import CompareSelect from '../../Select/components/CompareSelect';


import AllChart from '../../Graph/components/AllChart';

const TREND_PERCENT = {
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

const TREND_RANK = {
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

const Trend = (props) => {
  const {
    trend,
    state,
    state1,
    state2,
    changeState1,
    changeState2,
  } = props;

  if (!state1[TREND_PERCENT[trend]] || !state2[TREND_PERCENT[trend]]) {
    return (
      <NoTrend {...props} />
    );
  }

  return (
    <div className="o-layout">
      <div className="o-layout__item">
        <CompareSelect {...props} />
      </div>
      <div className="o-layout__item">
        <Chart {...props} />
      </div>
      <div className="o-layout__item">
        <AllChart {...props} />
      </div>
      <div className="o-layout__item">
        <div className="c-panel">

          <div className="c-panel__head">
            <h1 className="c-panel__heading">
              National Average
            </h1>
          </div>
          <div className="">
            <BarGraph percentage={state[TREND_PERCENT[trend]]} />
          </div>
        </div>
      </div>
      <h3 className="o-layout__item">Change States with drop downs</h3>
      <div className="o-layout__item">
        <div className="c-panel">
          <div className="c-panel__head">
            <h2 className="c-panel__heading">
              <ChangeStateButton
                changeState={changeState1}
                state={state1.state}
              />
            </h2>
          </div>
          <div className="">
            <BarGraph percentage={state1[TREND_PERCENT[trend]]} />
            <h3 className="c-panel__heading">
              Rank - {state1[TREND_RANK[trend]]}
            </h3>
          </div>

        </div>
      </div>
      <div className="o-layout__item">
        <div className="c-panel">
          <div className="c-panel__head">
            <h2 className="c-panel__heading">
              <ChangeStateButton
                changeState={changeState2}
                state={state2.state}
              />
            </h2>
          </div>
          <div className="">
            {state2 && <BarGraph percentage={state2[TREND_PERCENT[trend]]} />}
            <h3 className="c-panel__heading">
              Rank - {state2[TREND_RANK[trend]]}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

Trend.propTypes = {
  changeState1: PropTypes.func.isRequired,
  changeState2: PropTypes.func.isRequired,
  state: PropTypes.shape({}).isRequired,
  state1: PropTypes.shape({}).isRequired,
  state2: PropTypes.shape({}).isRequired,
  trend: PropTypes.string.isRequired,
};

export default Trend;

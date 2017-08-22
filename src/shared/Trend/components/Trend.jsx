import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'wolfshark';
import BarGraph from '../../Graph/components/BarGraph';
import Chart from '../../Graph/components/Chart';
import NoTrend from './NoTrend';
import ChangeStateButton from '../../Select/components/ChangeStateButton';
import StaticTrendSelect from '../../Select/components/StaticTrendSelect';
import SVGChart from '../../Graph/components/SVGChart';
import CompareSelect from '../../Select/components/CompareSelect';
import NationalSVG from '../../SVG/components/NationalSVG';

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

const Trend = (props) => {
  const {
    trend,
    state,
    state1,
    state2,
    changeState1,
    changeState2,
  } = props;

  // if (!state1[TREND_PERCENT[trend]] || !state2[TREND_PERCENT[trend]]) {
  //   return (
  //     <NoTrend {...props} />
  //   );
  // }

  return (
    <Container>
      <div className="o-layout">
        <div className="o-layout__item">
          <CompareSelect {...props} />
          <StaticTrendSelect {...props} />
        </div>
        <div className="o-layout__item u-pv">
          <SVGChart {...props} />
          <Chart {...props} />
          {/* <SVG /> */}
        </div>
        {/* <div className="o-layout__item u-pv u-ph0">
          <div className="c-panel">
            <div className="c-panel__head">
              <h1 className="c-panel__heading">
                National Average
              </h1>
            </div>
            <div className="">
              <BarGraph percentage={state[TREND_PERCENT[trend]]} />
            </div>
            <div className="o-layout__item u-pv u-ph0">
              <div className="c-panel__head">
                <h2 className="c-panel__heading">
                  Florida
                </h2>
              </div>
              <BarGraph percentage={state1[TREND_PERCENT[trend]]} />
              <h3 className="c-panel__heading">
                Rank - {state1[TREND_RANK[trend]]}
              </h3>
            </div>
            <div className="o-layout__item u-pv u-ph0">
              <div className="c-panel__head">
                <h2 className="c-panel__heading">
                  <ChangeStateButton
                    changeState={changeState2}
                    state={state2.state}
                  />
                </h2>
              </div>
              {state2 && <BarGraph percentage={state2[TREND_PERCENT[trend]]} />}
              <h3 className="c-panel__heading">
                Rank - {state2[TREND_RANK[trend]]}
              </h3>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
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

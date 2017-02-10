import React, { PropTypes } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import BarGraph from '../../Graph/components/BarGraph';
import StateSelect from '../../Select/components/StateSelect';

import data from '../../Data/data.json';

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
    chart,
  } = props;

  // data.forEach(function (i) {
  //   console.log('Yo:', i)
  // });

  // console.log(chart);

  if (!state1[TREND_PERCENT[trend]] || !state2[TREND_PERCENT[trend]]) {
    return (
      <div className="o-layout">
        <div className="o-layout__item u-1/2">
          <div className="c-panel">
            <div className="c-panel__head">
              <div className="c-panel__heading">
                <StateSelect
                  changeState={changeState1}
                  state={state1.state}
                />
              </div>
            </div>
            <div className="c-panel__content">
              <p className="o-layout__item u-text-center">
                No data
              </p>
            </div>
          </div>
        </div>
        <div className="o-layout__item u-1/2">
          <div className="c-panel">
            <div className="c-panel__head">
              <div className="c-panel__heading">
                <StateSelect
                  changeState={changeState2}
                  state={state2.state}
                />
              </div>
            </div>
            <div className="c-panel__content">
              <p className="o-layout__item u-text-center">
                No data
              </p>
            </div>
          </div>
        </div>
        <h1 className="o-layout__item o-heading-sub u-text-center">
          Try Selecting another State or Trend
        </h1>
      </div>
    );
  }

  return (
    <div className="o-layout">
      <div className="o-layout__item">

        <LineChart
          data={chart}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          height={300}
          width={600}
        >
          <XAxis dataKey="year" />
          <YAxis />
          <CartesianGrid strokeDasharray="1 1" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={`${TREND_PERCENT[trend]}1`} stroke="#D9534F" name={state1.state} />
          <Line type="monotone" dataKey={`${TREND_PERCENT[trend]}2`} stroke="#F0AD4E" name={state2.state} />
          <Line type="monotone" dataKey={`${TREND_PERCENT[trend]}n`} stroke="#337AB7" name="National Average" />
        </LineChart>

      </div>
      <div className="o-layout__item">
        <div className="c-panel">

          <div className="c-panel__head">
            <h1 className="c-panel__heading">
              National Average
            </h1>
          </div>

          <div className="c-panel__content">
            <BarGraph percentage={state[TREND_PERCENT[trend]]} />
          </div>

        </div>
      </div>

      <div className="o-layout__item u-1/2">
        <div className="c-panel">

          <div className="c-panel__head">
            <h2 className="c-panel__heading">
              <StateSelect
                changeState={changeState1}
                state={state1.state}
              />
            </h2>
          </div>

          <div className="c-panel__content">
            <BarGraph percentage={state1[TREND_PERCENT[trend]]} />
            <h3 className="c-panel__heading">
              Rank - {state1[TREND_RANK[trend]]}
            </h3>
          </div>

        </div>
      </div>

      <div className="o-layout__item u-1/2">
        <div className="c-panel">

          <div className="c-panel__head">
            <h2 className="c-panel__heading">
              <StateSelect
                changeState={changeState2}
                state={state2.state}
              />
            </h2>
          </div>

          <div className="c-panel__content">
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

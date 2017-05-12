import React from 'react';
import PropTypes from 'prop-types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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

// const TREND_RANK = {
//   volunteer: 'volunteerRank',
//   volunteerHours: 'volunteerHoursRank',
//   meeting: 'meetingRank',
//   community: 'communityRank',
//   donated: 'donatedRank',
//   voted: 'voteRank',
//   boycotted: 'productRank',
//   registered: 'registeredRank',
//   group: 'groupRank',
//   organization: 'organizationRank',
// };

const Chart = (props) => {
  const {
    trend,
    state,
    state1,
    state2,
    chart,
  } = props;

  return (
    <div className="c-panel u-pb0">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chart}
          margin={{ top: 5, right: 5, left: -30, bottom: 15 }}
          height={400}
          width={400}
        >
          <XAxis dataKey="year" />
          <YAxis />
          <CartesianGrid strokeDasharray="1 1" />
          <Tooltip />
          <Legend

          />

          <Line
            dataKey={`${TREND_PERCENT[trend]}1`}
            legendType="square"
            name={state1.state}
            stroke="#D9534F"
            type="monotone"
          />
          <Line
            dataKey={`${TREND_PERCENT[trend]}2`}
            legendType="square"
            name={state2.state}
            stroke="#F0AD4E"
            type="monotone"
          />
          <Line
            dataKey={`${TREND_PERCENT[trend]}n`}
            legendType="square"
            name={state.state}
            stroke="#337AB7"
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

Chart.propTypes = {
  state: PropTypes.shape({}).isRequired,
  state1: PropTypes.shape({}).isRequired,
  state2: PropTypes.shape({}).isRequired,
  trend: PropTypes.string.isRequired,
};

export default Chart;

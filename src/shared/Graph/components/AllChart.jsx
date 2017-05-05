import React, { PropTypes } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={chart}
        margin={{ top: 5, right: 10, left: -35, bottom: 5 }}
        height={400}
        width={400}
      >
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid strokeDasharray="1 1" />
        <Tooltip />
        <Legend

        />

        <Bar
          dataKey={`${TREND_PERCENT[trend]}1`}
          legendType="square"
          name={state1.state}
          fill="#D9534F"
          type="monotone"
        />
        <Bar
          dataKey={`${TREND_PERCENT[trend]}2`}
          legendType="square"
          name={state2.state}
          fill="#F0AD4E"
          type="monotone"
        />
        <Bar
          dataKey={`${TREND_PERCENT[trend]}n`}
          legendType="square"
          name={state.state}
          fill="#337AB7"
          type="monotone"
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

Chart.propTypes = {
  state: PropTypes.shape({}).isRequired,
  state1: PropTypes.shape({}).isRequired,
  state2: PropTypes.shape({}).isRequired,
  trend: PropTypes.string.isRequired,
};

export default Chart;

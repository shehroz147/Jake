import find from 'lodash/find';
import { createSelector } from 'reselect';

const dataSelector = state => state.data;
const primaryStateSelector = state => state.selection.primary;
const secondaryStateSelector = state => state.selection.secondary;
const trendSelector = state => state.selection.trend;
const yearSelector = state => state.selection.year;


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

export const dataSelector = state => state.data;

export const filteredStatePrimarySelector = createSelector(
  [primaryStateSelector, trendSelector, yearSelector, dataSelector],
  (primary, trend, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

import find from 'lodash/find';
import { createSelector } from 'reselect';

import {
  state1Selector,
  state2Selector,
  trendSelector,
  yearSelector,
} from '../Select/selector';

export const dataSelector = state => state.data;

export const filteredState1Selector = createSelector(
  [state1Selector, trendSelector, yearSelector, dataSelector],
  (state, trend, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

export const filteredState2Selector = createSelector(
  [state2Selector, trendSelector, yearSelector, dataSelector],
  (state, trend, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

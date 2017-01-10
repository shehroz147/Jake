import find from 'lodash/find';
import { createSelector } from 'reselect';

import {
  compareSelector,
  stateSelector,
  trendSelector,
  yearSelector,
} from '../Select/selector';

export const dataSelector = state => state.data;

export const filteredDataSelector = createSelector(
  [stateSelector, trendSelector, yearSelector, dataSelector],
  (state, trend, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

export const filteredCompareDataSelector = createSelector(
  [compareSelector, trendSelector, yearSelector, dataSelector],
  (state, trend, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

import find from 'lodash/find';
import { createSelector } from 'reselect';

import {
  stateSelector,
  trendSelector,
  yearSelector,
} from './options';

export const dataSelector = state => state.data;

export const filteredDataSelector = createSelector(
  [stateSelector, trendSelector, yearSelector, dataSelector],
  (state, trend, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

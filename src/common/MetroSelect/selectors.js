import find from 'lodash/find';
import { createSelector } from 'reselect';

import {
  yearSelector,
} from '../YearSelect/selectors';

import {
  dataSelector,
} from '../Data/selectors';

export const primaryMetroSelector = state => state.metro.primary;
export const secondaryMetroSelector = state => state.metro.secondary;

export const filteredPrimaryMetroSelector = createSelector(
  [primaryMetroSelector, yearSelector, dataSelector],
  (metro, year, data) => {
    let filteredData = find(data, { year: year.year, metro });
    return filteredData || [];
  },
);

export const filteredSecondaryMetroSelector = createSelector(
  [secondaryMetroSelector, yearSelector, dataSelector],
  (metro, year, data) => {
    const filteredData = find(data, { year: year.year, metro });
    return filteredData || [];
  },
);

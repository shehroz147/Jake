import find from 'lodash/find';
import { createSelector } from 'reselect';

import {
  yearSelector,
} from '../YearSelect/selectors';

import {
  dataSelector,
} from '../Data/selectors';

export const primaryStateSelector = state => state.state.primary;
export const secondaryStateSelector = state => state.state.secondary;
export const tertiaryStateSelector = state => state.state.tertiary;

export const filteredPrimaryStateSelector = createSelector(
  [primaryStateSelector, yearSelector, dataSelector],
  (state, year, data) => {
    let filteredData = find(data, { year: year.year, state });
    return filteredData || [];
  },
);

export const filteredSecondaryStateSelector = createSelector(
  [secondaryStateSelector, yearSelector, dataSelector],
  (state, year, data) => {
    const filteredData = find(data, { year: year.year, state });
    return filteredData || [];
  },
);

export const filteredTertiaryStateSelector = createSelector(
  [tertiaryStateSelector, yearSelector, dataSelector],
  (state, year, data) => {
    const filteredData = find(data, { year: year.year, state });
    return filteredData || [];
  },
);

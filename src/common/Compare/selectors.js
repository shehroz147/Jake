import find from 'lodash/find';
import filter from 'lodash/filter';
import uniq from 'lodash/uniq';
import { createSelector } from 'reselect';

import {
  dataSelector,
} from '../Data/selectors';

export const primarySelector = state => state.selection.primary;
export const secondarySelector = state => state.selection.secondary;
export const tertiarySelector = state => state.selection.tertiary;
export const metroSizeSelector = state => state.selection.size;
export const yearSelector = state => state.selection.year;

export const primaryData = createSelector(
  [primarySelector, yearSelector, dataSelector],
  (state, year, data) => {
    let filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

export const secondaryData = createSelector(
  [secondarySelector, yearSelector, dataSelector],
  (state, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

export const tertiaryData = createSelector(
  [tertiarySelector, yearSelector, dataSelector],
  (state, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

export const makeYearList = trend => createSelector(
  [dataSelector],
  (data) => {
    let yearList = data
      .filter(d => !!d[trend])
      .map(d => d.year);

    return yearList = uniq(yearList);
  }
);

export const metroList = createSelector(
  [dataSelector, metroSizeSelector],
  (data, size) => {
    const metroList = filter(data, { metro_size: size });
    return metroList || [];
  }
);

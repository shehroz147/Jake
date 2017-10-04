import filter from 'lodash/filter';
import uniq from 'lodash/uniq';

import { createSelector } from 'reselect';

import {
  dataSelector,
} from '../Data/selectors';

export const yearSelector = state => state.year;

export const makeYearListSelector = trend => createSelector(
  [dataSelector],
  (data) => {
    let yearList = data
      .filter(d => !!d[trend])
      .map(d => d.year);

    return yearList = uniq(yearList);
  }
);

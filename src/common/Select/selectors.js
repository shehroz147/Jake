import find from 'lodash/find';
import { createSelector } from 'reselect';

import {
  primaryStateSelector,
  secondaryStateSelector,
} from '../StateSelect/selectors';

import {
  primaryMetroSelector,
  secondaryMetroSelector,
} from '../MetroSelect/selectors';

import {
  yearSelector,
} from '../YearSelect/selectors';

import {
  dataSelector,
} from '../Data/selectors';


export const filteredPrimaryStateSelector = createSelector(
  [primaryStateSelector, yearSelector, dataSelector],
  (state, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

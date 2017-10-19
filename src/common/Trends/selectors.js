import filter from 'lodash/filter';
import find from 'lodash/find';
import get from 'lodash/get';
import has from 'lodash/has';
import uniq from 'lodash/uniq';
import { createSelector } from 'reselect';

import { dataSelector } from '../Data/selectors';
import { primary, secondary, type } from '../Compare/selectors';

export const makelistYears = trend => createSelector(
  [dataSelector, type],
  (data, type) => {
    let yearList = data
      .filter(data => has(data, `${trend}_percent`))
      .filter(data => has(data, type))
      .map(d => d.year);

    return yearList = uniq(yearList);
  }
);

export const getYear = (state, props) => {
  return get(state, `trends.${props.trend}.${props.type}`);
};

export const getPrimaryData = createSelector(
  [dataSelector, getYear, type, primary],
  (data, year, type, primary) => {
    const primaryData = find(data, { [type]: primary, year });
    return primaryData || {};
  },
);

export const getSecondaryData = createSelector(
  [dataSelector, getYear, type, secondary],
  (data, year, type, secondary) => {
    const secondaryData = find(data, { [type]: secondary, year });
    return secondaryData || {};
  },
);

export const getTertiaryData = createSelector(
  [dataSelector, getYear, type],
  (data, year, type, secondary) => {
    const secondaryData = find(data, { [type]: "National Average", year });
    return secondaryData || {};
  },
);

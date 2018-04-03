// import find from 'lodash/find';
import filter from 'lodash/filter';
import get from 'lodash/get';
import uniq from 'lodash/uniq';
import { createSelector } from 'reselect';

import {
  dataSelector,
} from '../Data/selectors';

export const type = state => {
  return get(state, `compare.type`);
}

export const primary = state => {
  const type = get(state, `compare.type`);
  return get(state, `compare.${type}.primary`);
};

export const secondary = state => {
  const type = get(state, `compare.type`);
  return get(state, `compare.${type}.secondary`);
};

export const size = state => {
  const type = get(state, `compare.type`);
  return get(state, `compare.${type}.size`);
};


// export const primaryData = createSelector(
//   [primarySelector, yearSelector, dataSelector],
//   (state, year, data) => {
//     let filteredData = find(data, { year, state });
//     return filteredData || [];
//   },
// );
//
// export const secondaryData = createSelector(
//   [secondarySelector, yearSelector, dataSelector],
//   (state, year, data) => {
//     const filteredData = find(data, { year, state });
//     return filteredData || [];
//   },
// );
//
// export const tertiaryData = createSelector(
//   [tertiarySelector, yearSelector, dataSelector],
//   (state, year, data) => {
//     const filteredData = find(data, { year, state });
//     return filteredData || [];
//   },
// );
//
// export const makeYearList = trend => createSelector(
//   [dataSelector],
//   (data) => {
//     let yearList = data
//       .filter(d => !!d[trend])
//       .map(d => d.year);
//
//     return yearList = uniq(yearList);
//   }
// );

export const listMetros = createSelector(
  [dataSelector, size],
  (data, size) => {
    let metros = [];
    if (!size) {
      metros = filter(data, 'metro_size');
    } else {
      metros = filter(data, { metro_size: size });
    }

    return uniq(metros.map(metro => metro.metro)).sort();
  }
);

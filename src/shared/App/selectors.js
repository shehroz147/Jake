import filter from 'lodash/filter';
import flatten from 'lodash/flatten';
import find from 'lodash/find';
import forEach from 'lodash/forEach';
import groupBy from 'lodash/groupBy';
import keys from 'lodash/keys';
import values from 'lodash/values';
import { createSelector } from 'reselect';

import {
  stateSelector,
  state1Selector,
  state2Selector,
  trendSelector,
  yearSelector,
} from '../Select/selectors';

import {
  TREND_PERCENT,
  TREND_RANK,
} from '../Trend/components/Trend';

export const dataSelector = state => state.data;

export const filteredStateSelector = createSelector(
  [stateSelector, trendSelector, yearSelector, dataSelector],
  (state, trend, year, data) => {
    const filteredData = find(data, { year, state });
    return filteredData || [];
  },
);

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

export const chartSelector = createSelector(
  [state1Selector, state2Selector, dataSelector, trendSelector],
  (state1, state2, data, trend) => {
    const chartData = filter(data, (d) => {
      if (d.state === state1 && d[TREND_PERCENT[trend]]) {
        return true;
      }

      if (d.state === state2 && d[TREND_PERCENT[trend]]) {
        return true;
      }

      if (d.state === 'National Average' && d[TREND_PERCENT[trend]]) {
        return true;
      }

      return false;
    })
    .reduce((result, d, index) => {
      result[index] = {};
      if (d.state === state1) {
        forEach(keys(d), (key) => {
          if (key === 'year') {
            result[index]['year'] = d['year'];
          } else {
            result[index][`${key}1`] = d[key];
          }
        });
      } else if (d.state === state2) {
        forEach(keys(d), (key) => {
          if (key === 'year') {
            result[index]['year'] = d['year'];
          } else {
            result[index][`${key}2`] = d[key];
          }
        });
      } else if (d.state === 'National Average') {
        forEach(keys(d), (key) => {
          if (key === 'year') {
            result[index]['year'] = d['year'];
          } else {
            result[index][`${key}n`] = d[key];
          }
        });
      }

      return result;
    }, []);

    const groupedChartData = groupBy(chartData, 'year');
    const finalChartData = [];
    let i = 0;
    forEach(groupedChartData, (year) => {
      // console.log(year);
      finalChartData[i] = Object.assign(
        {},
        year[0],
        year[1],
        year[2],
      );

      i += 1;
    });

    // console.log(finalChartData);

    return finalChartData;
  },
);

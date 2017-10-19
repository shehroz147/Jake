import { combineReducers } from 'redux';

import compare from '../Compare/reducer';
import data from '../Data/reducer';
import trends from '../Trends/reducer';

export default combineReducers({
  compare,
  data,
  trends,
});

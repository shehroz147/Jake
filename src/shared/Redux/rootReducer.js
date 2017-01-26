import { combineReducers } from 'redux';

import data from '../Data/reducer';
import options from '../Select/reducer';
import compare from '../Compare/reducer';

export default combineReducers({
  compare,
  data,
  options,
});

// const users = (state = [], action) => {
//   switch (action.type) {
//     case 'USERS': return [...state, ...action.payload];
//     default: return state;
//   }
// };

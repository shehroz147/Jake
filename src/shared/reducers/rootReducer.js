import { combineReducers } from 'redux';

import data from './data';
import options from './options';
import compare from './compare';

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

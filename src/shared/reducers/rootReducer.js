import { combineReducers } from 'redux';

import data from './data';
import options from './options';

export default combineReducers({
  data,
  options,
});

// const users = (state = [], action) => {
//   switch (action.type) {
//     case 'USERS': return [...state, ...action.payload];
//     default: return state;
//   }
// };

import { combineReducers } from 'redux';

import data from '../Data/reducer';
import selection from '../Select/reducer';


export default combineReducers({
  data,
  selection,
});

// const users = (state = [], action) => {
//   switch (action.type) {
//     case 'USERS': return [...state, ...action.payload];
//     default: return state;
//   }
// };

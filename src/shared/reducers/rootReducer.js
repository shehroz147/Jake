import { combineReducers } from 'redux';

import snapshots from './snapshots';
import options from './options';

export default combineReducers({
  snapshots,
  options,
});

// const users = (state = [], action) => {
//   switch (action.type) {
//     case 'USERS': return [...state, ...action.payload];
//     default: return state;
//   }
// };

import { combineReducers } from 'redux';

import snapshots from './snapshots';
import state from './state';

export default combineReducers({
  snapshots,
  state,
});

// const users = (state = [], action) => {
//   switch (action.type) {
//     case 'USERS': return [...state, ...action.payload];
//     default: return state;
//   }
// };

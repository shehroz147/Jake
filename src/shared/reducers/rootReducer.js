import { combineReducers } from 'redux';

const users = (state = [], action) => {
  switch (action.type) {
    case 'USERS': return [...state, ...action.payload];
    default: return state;
  }
};

export default combineReducers({
  users,
});

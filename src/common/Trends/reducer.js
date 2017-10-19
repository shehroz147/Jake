import get from 'lodash/get';
import { combineReducers } from 'redux';

const yearReducer = (state, action) => {
  if (action.type === 'SELECT_YEAR') {
    return action.payload.year;
  }

  return state;
};

const trendReducerByKey = key => (state = {}, action) => {
  return {
    ...state,
    [action.payload.type]: yearReducer(state[action.payload.type], action),
  };
};

export default (state = {}, action) => {
  if (!get(action, 'payload.trend', false)) {
    return state;
  }

  const { type } = state;

  return {
    ...state,
    [action.payload.trend]: trendReducerByKey(action.payload.trend)(state[action.payload.trend], action),
  };
};

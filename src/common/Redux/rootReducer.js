import { combineReducers } from 'redux';

import dataReducers from '../Data/reducers';
import compareReducers from '../Compare/reducers';

export default combineReducers({
  data: dataReducers,
  // metro: metroReducers,
  // state: stateReducers,
  // type: typeReducer,
  // year: yearReducers,
  selection: compareReducers,
});

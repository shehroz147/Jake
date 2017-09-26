import { combineReducers } from 'redux';

import dataReducers from '../Data/reducers';
import metroReducers from '../MetroSelect/reducers';
import stateReducers from '../StateSelect/reducers';
import typeReducer from '../Select/reducers';
import yearReducers from '../YearSelect/reducers';

export default combineReducers({
  data: dataReducers,
  metro: metroReducers,
  state: stateReducers,
  type: typeReducer,
  year: yearReducers,
});

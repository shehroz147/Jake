import { combineReducers } from 'redux';

import data from '../Data/reducers';
import selection from '../Select/reducers';
import uploader from '../Admin/Uploader/reducers';

export default combineReducers({
  data,
  uploader,
  selection,
});

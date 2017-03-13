import union from 'lodash/union';
import without from 'lodash/without';

import * as UploadTypes from './constants';

const FIVE_MINUTES = 1000 * 60 * 5;

const expiresReducer = (state, action) => {
  switch (action.type) {
    case UploadTypes.UPLOAD_LOADING_SUCCESS: return Date.now() + FIVE_MINUTES;
    default: return state;
  }
};

const resultReducer = (state, action) => {
  if (!Array.isArray(action.response.result)) {
    return union(state, [action.response.result]);
  }

  return union(state, action.response.result);
};

const idsReducer = (state, action) => {
  switch (action.type) {
    case UploadTypes.UPLOAD_LOADING_SUCCESS: return resultReducer(state, action);
    case UploadTypes.REMOVE_UPLOAD: return without(state, action.payload);
    default: return state;
  }
};

const loadingReducer = (state, action) => {
  switch (action.type) {
    case UploadTypes.UPLOAD_LOADING: return true;
    case UploadTypes.UPLOAD_LOADING_SUCCESS: return false;
    case UploadTypes.UPLOAD_LOADING_FAILURE: return false;
    default: return state;
  }
};

const initialState = {
  expires: Date.now(),
  ids: [],
  loading: false,
};

export default (state = initialState, action) => ({
  expires: expiresReducer(state.expires, action),
  ids: idsReducer(state.ids, action),
  loading: loadingReducer(state.loading, action),
});

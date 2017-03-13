import get from 'lodash/get';
// import { createSelector } from 'reselect';

// Some import for reports on client side
// import { reportsSelector } from '../Reports/selectors';

export const uploadsSelector = state => get(state, 'uploads.loading', false);

export const uploadSelector = (state, uploadId) => get(state, `entities.uploads.${uploadId}`, {});

export const uploadIdSelector = state => get(state, 'uploads.id', []);

export const selectPrimary = primary => ({
  type: 'SELECT_STATE_PRIMARY',
  payload: primary,
});

export const selectSecondary = secondary => ({
  type: 'SELECT_STATE_SECONDARY',
  payload: secondary,
});

export const selectTertiary = tertiary => ({
  type: 'SELECT_STATE_TERTIARY',
  payload: tertiary,
});

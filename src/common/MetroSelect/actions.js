export const selectPrimary = primary => ({
  type: 'SELECT_METRO_PRIMARY',
  payload: primary,
});

export const selectSecondary = secondary => ({
  type: 'SELECT_METRO_SECONDARY',
  payload: secondary,
});

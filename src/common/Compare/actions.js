export const selectType = type => ({
  type: 'SELECT_TYPE',
  payload: {
    type,
  },
});

export const selectPrimary = primary => ({
  type: 'SELECT_PRIMARY',
  payload: primary,
});

export const selectSecondary = secondary => ({
  type: 'SELECT_SECONDARY',
  payload: secondary,
});

export const selectTertiary = tertiary => ({
  type: 'SELECT_TERTIARY',
  payload: tertiary,
});

export const selectMetroSize = metro_size => ({
  type: 'SELECT_METRO_SIZE',
  payload: metro_size,
});

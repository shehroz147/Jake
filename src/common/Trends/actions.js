export const selectYear = (trend, type, year) => ({
  type: 'SELECT_YEAR',
  payload: {
    trend,
    type,
    year,
  },
});

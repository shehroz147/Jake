export const changeTrend = trend => ({
  type: 'CHANGE TREND',
  payload: trend,
});

export const changeState = state => ({
  type: 'CHANGE STATE',
  payload: state,
});

export const changeYear = year => ({
  type: 'CHANGE YEAR',
  payload: year,
});

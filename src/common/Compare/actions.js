import * as CompareConstants from './constants';

export const selectType = type => ({
  type: 'SELECT_TYPE',
  payload: { type },
});

export const selectPrimary = primary => ({
  type: 'SELECT_PRIMARY',
  payload: { primary },
});

export const selectSecondary = secondary => ({
  type: 'SELECT_SECONDARY',
  payload: { secondary },
});

export const selectSize = size => ({
  type: 'SELECT_SIZE',
  payload: { size },
});

export const selectRandomPrimaryState = () => {
  const {
    states,
  } = CompareConstants;

  const length = states.length - 1;
  const random = Math.floor(Math.random() * length);
  const state = states[random];
  return selectPrimary(state);
};

export const selectRandomSecondaryState = () => {
  const {
    states,
  } = CompareConstants;

  const length = states.length - 1;
  const random = Math.floor(Math.random() * length);
  const state = states[random];
  return selectSecondary(state);
};

export const selectRandomPrimaryMetro = metros => {
  const length = metros.length - 1;
  const random = Math.floor(Math.random() * length);
  const metro = metros[random];
  return selectPrimary(metro);
};

export const selectRandomSecondaryMetro = metros => {
  const length = metros.length - 1;
  const random = Math.floor(Math.random() * length);
  const metro = metros[random];
  return selectSecondary(metro);
};

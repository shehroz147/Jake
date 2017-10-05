const selectType = (state, action) => {
  if (action.type === 'SELECT_TYPE') {
    return action.payload.type;
  }
  return state;
};

const selectMetroSize = (state, action) => {
  switch (action.type) {
    case 'SELECT_METRO_SIZE': return action.payload;
    default: return state;
  }
};

const selectPrimary = (state, action) => {
  switch (action.type) {
    case 'SELECT_PRIMARY': return action.payload;
    default: return state;
  }
};

const selectSecondary = (state, action) => {
  switch (action.type) {
    case 'SELECT_SECONDARY': return action.payload;
    default: return state;
  }
};

const selectTertiary = (state, action) => {
  switch (action.type) {
    case 'SELECT_TERTIARY': return action.payload;
    default: return state;
  }
};

const selectYear = (state, action) => {
  switch (action.type) {
    case 'SELECT_YEAR': return action.payload;
    default: return state;
  }
};

const initialState = {
  primary: 'Florida',
  secondary: 'Georgia',
  size: '3',
  tertiary: 'National Average',
  year: '2011',
  type: 'state',
};

export default (state = initialState, action) => ({
  type: selectType(state.type, action),
  primary: selectPrimary(state.primary, action),
  secondary: selectSecondary(state.secondary, action),
  size: selectMetroSize(state.size, action),
  tertiary: selectTertiary(state.tertiary, action),
  year: selectYear(state.year, action),
});

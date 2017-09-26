const selectPrimary = (state, action) => {
  switch (action.type) {
    case 'SELECT_STATE_PRIMARY': return action.payload;
    default: return state;
  }
}

const selectSecondary = (state, action) => {
  switch (action.type) {
    case 'SELECT_STATE_SECONDARY': return action.payload;
    default: return state;
  }
}

const selectTertiary = (state, action) => {
  switch (action.type) {
    case 'SELECT_STATE_TERTIARY': return action.payload;
    default: return state;
  }
}

const initialState = {
  primary: 'Florida',
  secondary: 'Georgia',
  tertiary: 'National Average',
};

export default (state = initialState, action) => ({
  primary: selectPrimary(state.primary, action),
  secondary: selectSecondary(state.secondary, action),
  tertiary: selectTertiary(state.tertiary, action),
});

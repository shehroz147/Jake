const selectPrimary = (state, action) => {
  switch (action.type) {
    case 'SELECT_METRO_PRIMARY': return action.payload;
    default: return state;
  }
};

const selectSecondary = (state, action) => {
  switch (action.type) {
    case 'SELECT_METRO_SECONDARY': return action.payload;
    default: return state;
  }
};

const selectMetroSize = (state, action) => {
  switch (action.type) {
    case 'SELECT_METRO_SIZE': return action.payload;
    default: return state;
  }
};

const initialState = {
  primary: 'Orlando FL',
  secondary: 'Sarasota-Bradenton-Venice FL',
  size: "1",
};

export default (state = initialState, action) => ({
  primary: selectPrimary(state.primary, action),
  secondary: selectSecondary(state.secondary, action),
  size: selectMetroSize(state.size, action),
});

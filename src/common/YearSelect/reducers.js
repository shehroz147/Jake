const selectYear = (state, action) => {
  switch (action.type) {
    case 'SELECT_YEAR': return action.payload;
    default: return state;
  }
}

const initialState = {
  year: '2011',
};

export default (state = initialState, action) => ({
  year: selectYear(state.year, action),
});

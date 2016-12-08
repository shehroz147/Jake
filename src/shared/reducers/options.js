const stateReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE STATE': return action.payload;
    default: return state;
  }
};

const trendReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE TREND': return action.payload;
    default: return state;
  }
};

const yearReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE YEAR': return action.payload;
    default: return state;
  }
};

const initialState = {
  state: '9',
  trend: 'volunteer',
  year: 2008,
};

export default (state = initialState, action) => ({
  state: stateReducer(state.state, action),
  trend: trendReducer(state.trend, action),
  year: yearReducer(state.year, action),
});

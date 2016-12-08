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
    case 'CHANGE YEAR': return parseInt(action.payload, 10);
    default: return state;
  }
};

const initialState = {
  state: 'Florida',
  trend: 'volunteer',
  year: 2012,
};

export default (state = initialState, action) => ({
  state: stateReducer(state.state, action),
  trend: trendReducer(state.trend, action),
  year: yearReducer(state.year, action),
});

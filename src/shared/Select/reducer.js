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

const stateReducer1 = (state, action) => {
  switch (action.type) {
    case 'CHANGE STATE 1': return action.payload;
    default: return state;
  }
};

const stateReducer2 = (state, action) => {
  switch (action.type) {
    case 'CHANGE STATE 2': return action.payload;
    default: return state;
  }
};

const initialState = {
  state1: 'Florida',
  state2: 'Texas',
  trend: 'volunteer',
  year: '2014',
};

export default (state = initialState, action) => ({
  state1: stateReducer1(state.state1, action),
  state2: stateReducer2(state.state2, action),
  trend: trendReducer(state.trend, action),
  year: yearReducer(state.year, action),
});

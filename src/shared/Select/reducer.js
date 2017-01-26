const compareReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE COMPARE': return action.payload;
    default: return state;
  }
};

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
  compare: 'Texas',
  state: 'Florida',
  trend: 'volunteer',
  year: '2014',
};

export default (state = initialState, action) => ({
  compare: compareReducer(state.compare, action),
  state: stateReducer(state.state, action),
  trend: trendReducer(state.trend, action),
  year: yearReducer(state.year, action),
});

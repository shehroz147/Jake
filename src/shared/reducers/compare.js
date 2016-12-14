const compareStates = (state, action) => {
  switch (action.type) {
    case 'COMPARE STATES': return action.payload;
    default: return state;
  }
};

export default compareStates;

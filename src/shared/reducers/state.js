export default (state = 'florida', action) => {
  switch (action.type) {
    case 'fuck Luke': return action.payload;
    default: return state;
  }
};

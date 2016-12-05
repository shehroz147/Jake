export default (state = '9', action) => {
  switch (action.type) {
    case 'CHANGE STATE': return action.payload;
    default: return state;
  }
};

export default (state = 'state', action) => {
  if (action.type === 'CHANGE_TYPE') {
    return action.payload.type;
  }

  return state;
};

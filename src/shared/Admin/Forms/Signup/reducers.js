export default (state = 0, action) => {
  switch (action.type) {
    case 'CHANGE SIGNUP STAGE':
      return action.payload;
    default:
      return state;
  }
};

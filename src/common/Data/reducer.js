export default (state = [], action) => {
  switch (action.type) {
    case 'RETRIEVE_DATA':
      return [
        ...state,
        ...action.payload,
      ];
    default: return state;
  }
};

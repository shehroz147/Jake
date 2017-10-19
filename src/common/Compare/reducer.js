const compare = (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_PRIMARY':
      return {
        ...state,
        primary: action.payload.primary,
      };
    case 'SELECT_SECONDARY':
      return {
        ...state,
        secondary: action.payload.secondary,
      };
    case 'SELECT_SIZE':
      return {
        ...state,
        size: action.payload.size,
      };
    default:
      return state;
  }
};

const initialState = {
  type: 'state',
};

export default (state = initialState, action) => {
  switch(action.type) {
    case 'SELECT_TYPE':
      return {
        ...state,
        type: action.payload.type,
      };
    case 'SELECT_PRIMARY':
    case 'SELECT_SECONDARY':
    case 'SELECT_SIZE':
      return {
        ...state,
        [state.type]: compare(state[state.type], action)
      };
    default:
      return state;
  }
};

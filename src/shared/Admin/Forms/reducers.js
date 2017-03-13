import removeFromObject from '../../utils/removeFromObject';

const values = (state = {}, action) => {
  if (action.type === 'REMOVE PROVIDER') {
    const { provider, ...rest } = state; // eslint-disable-line
    return rest;
  }

  switch (action.type) {
    case 'EDIT FIELD':
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
};

const errors = (state = {}, action) => {
  // Do this here to prevent lexical declaration in switch
  if (action.type === 'REMOVE PROVIDER') {
    const { provider, ...rest } = state; // eslint-disable-line
    return rest;
  }

  switch (action.type) {
    case 'EDIT FIELD':
      return Object.keys(state).reduce((result, key) => {
        if (action.field !== key) {
          result[key] = state[key]; // eslint-disable-line
        }
        return result;
      }, {});
    case 'VALIDATE FIELD':
      return {
        ...state,
        [action.field]: action.errors,
      };
    default:
      return state;
  }
};

const validating = (state = {}, action) => {
  // Do this here to prevent lexical declaration in switch
  if (action.type === 'REMOVE PROVIDER') {
    const { provider, ...rest } = state; // eslint-disable-line
    return rest;
  }

  switch (action.type) {
    case 'EDIT FIELD':
      return Object.keys(state).reduce((result, key) => {
        if (action.field !== key) {
          result[key] = state[key]; // eslint-disable-line
        }
        return result;
      }, {});
    case 'VALIDATE FIELD':
      return {
        ...state,
        [action.field]: false,
      };
    case 'VALIDATING FIELD':
      return {
        ...state,
        [action.field]: true,
      };
    default:
      return state;
  }
};

const input = (state = {}, action) => {
  switch (action.type) {
    case 'EDIT FIELD':
    case 'REMOVE PROVIDER':
      return {
        ...state,
        values: values(state.values, action),
        errors: errors(state.errors, action),
        validating: validating(state.validating, action),
      };
    case 'VALIDATE FIELD':
      return {
        ...state,
        errors: errors(state.errors, action),
        validating: validating(state.validating, action),
      };
    case 'VALIDATING FIELD':
      return {
        ...state,
        validating: validating(state.validating, action),
      };
    default:
      return state;
  }
};

export default (state = {}, action) => {
  if (action.payload) {
    const { form, ...rest } = action.payload;
    rest.type = action.type;

    if (form) {
      if (action.type === 'EMPTY FORM') {
        return removeFromObject(state, key => key !== form);
      }

      return {
        ...state,
        [form]: input(state[form], rest),
      };
    }
  }

  return state;
};

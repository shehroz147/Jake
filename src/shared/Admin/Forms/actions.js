import get from 'lodash/get';
import Promise from 'bluebird';

import * as validators from '../../utils/validators';

export const edit = (form, field, value) => ({
  type: 'EDIT FIELD',
  payload: {
    form,
    field,
    value,
  },
});

export const empty = form => ({
  type: 'EMPTY FORM',
  payload: {
    form,
  },
});

const validateField = (form, field, errors) => ({
  type: 'VALIDATE FIELD',
  payload: {
    errors,
    form,
    field,
  },
});

export const validateFieldSync = (value, rules) => {
  const errors = rules.reduce((arr, rule) => {
    if (!validators[rule] && typeof validators[rule] !== 'function') {
      console.warn(`Validator "${rule}" is not a validator.`);
      return arr;
    }

    const newArr = arr.concat(validators[rule](value));
    return newArr;
  }, []);

  return errors;
};

export const validateFieldAsync = (value, rules) => {
  const asyncValidators = rules.reduce((arr, rule) => {
    if (!validators[rule] && typeof validators[rule] !== 'function') {
      console.warn(`Validator "${rule}" is not a validator.`);
      return arr;
    }


    if (!value || value === '') {
      return arr;
    }

    const newArr = arr.concat(validators[rule](value));
    return newArr;
  }, []);

  return Promise.all(asyncValidators);
};

const needsValidation = (field, value, form) => {
  if (form === null) return false;

  const {
    errors = {},
    validating = {},
    values = {},
  } = form;

  const validated = Array.isArray(errors[field]) && errors[field].length === 0;


  if (validating[field]) {
    return false;
  }


  if (validated && values[field] === value) {
    return false;
  }

  return true;
};

export const validate = (
  form,
  field,
  value,
  rules = [],
  asyncRules = [],
  force = false
) => (dispatch, getState) => {
  if (!needsValidation(field, value, get(getState(), `forms.${form}`, null)) && !force) {
    return;
  }

  if (!rules.length && !asyncRules.length) {
    console.warn('No validation rules specified. Validator exiting.');
    return;
  }

  const isAsync = !!asyncRules.length;
  let errors = validateFieldSync(value, rules);

  if (isAsync) {
    dispatch(validatingField(form, field));
    validateFieldAsync(value, asyncRules, dispatch)
    .then(results => {
      errors = errors.concat(...results);
      dispatch(validateField(form, field, errors));
    });
  } else {
    dispatch(validateField(form, field, errors));
  }
};

import axios from 'axios';
import validator from 'validator';

import API_URL from './apiUrl';

export const required = (str) => {
  const errors = [];

  if (!str || validator.isNull(str)) {
    errors.push('This is required.');
  }

  return errors;
};

export const unique = str => (
  new Promise((resolve, reject) => {
    axios.get(`${API_URL}/users?filter[email]=${str}`)
      .then(({ data }) => {
        if (data.length > 0 && data[0].email) {
          return resolve(['A user has already registered with that email address.']);
        }

        return resolve([]);
      })
      .catch(reject);
  })
);

export const isFormValid = (fields, form) => {
  if (typeof form === 'undefined') {
    return false;
  }

  const {
    errors = {},
    validating = {},
    values = {},
  } = form;

  return fields.every((field) => {
    if (typeof values[field] === 'undefined') {
      return false;
    }

    if (typeof errors[field] === 'undefined') {
      return false;
    }

    if (validating[field] === true) {
      return false;
    }

    if (
      (Array.isArray(errors[field])) &&
      (errors[field].length > 0)
    ) {
      return false;
    }

    return true;
  });
};

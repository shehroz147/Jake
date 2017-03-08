import _ from 'lodash';

export default {
  handleValidationError (err) {
    let errors = err.errors;
    let _errorsByPath = {};

    if (errors) {
      _.each(errors, (error) => {
        _errorsByPath[error.path] = {
          name: error.path,
          message: error.message
        };
      });
    }

    return {
      status: 400,
      message: 'Validation failed.',
      errors: _errorsByPath
    };
  },

  handleUnauthorizedError(error) {
    return {
      status: 403,
      message: 'You are not authorized.'
    };
  }
};

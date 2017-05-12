import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  asyncRules,
  errors,
  handleBlur,
  handleChange,
  hidden,
  id,
  label,
  name,
  rules,
  validating,
  value,
}) => {
  const dirty = Array.isArray(errors);
  const hasErrors = dirty && errors.length > 0;
  const hasValue = value;

  return (
    <div className="c-form-field">
      <label htmlFor={id}>{label}</label>

      <div
        className={classNames(
          'c-form-input',
          { 'c-form-input--loading': validating }
        )}
      >
        <input
          className={classNames(
            'c-text-input',
            { 'c-form-input--error': hasErrors },
            { 'c-text-input--valid': hasValue && dirty && !hasErrors && !validating },
          )}
          id={id}
          name={name}
          onBlur={({ target }) => handleBlur(target.name, target.value, rules, asyncRules)}
          onChange={({ target }) => handleChange(target.name, target.value, rules, asyncRules)}
          type={hidden ? 'password' : 'text'}
          value={value || ''}
        />
      </div>
      <div className="c-form-helpers">
        {errors && errors.map((error, i) => (
          <p className="c-form-field__helper c-form-field__helper--error" key={i}>
            {error}
          </p>
        ))}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  asyncRules: PropTypes.arrayOf(PropTypes.string),
  errors: PropTypes.arrayOf(PropTypes.string),
  handleBlur: PropTypes.func,
  handleChange: PropTypes.func,
  hidden: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.string),
  validating: PropTypes.bool,
  value: PropTypes.string,
};

export default TextInput;

import React, { PropTypes } from 'react';

import TextInput from '../../../../Inputs/components/TextInput';
import {
  SIGNUP_PROFILE,
  SIGNUP_SELECT,
} from '../actions';

const SignupWithOAuth = () => {
  const handleBlur = (field, value, rules, asyncRules) => {
    this.props.validate('signup', field, value, rules, asyncRules);
  };

  const handleChange = (field, value, rules, asyncRules) => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.validate('signup', field, value, rules, asyncRules);
    }, 400);

    this.props.edit('signup', field, value);
  };

  const {
    errors,
    signupValues,
    validating,
  } = this.props;

  return (
    <div className="o-wrapper o-wrapper--narrow" >
      <div className="c-panel" >
        <div className="c-panel__head" >
          <div className="o-layout o-layout--middle" >
            <div className="o-layout__item" >
              <h1 className="c-panel__heading" >Confirm Your Email</h1>
            </div>
            <div className="o-layout__item" >
              <div className="u-text-right" >Step <strong>2</strong> of 3</div>
            </div>
          </div>
        </div>

        <div className="c-panel__content">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              this.props.changeSignupStage(SIGNUP_PROFILE);
            }}
          >
            <TextInput
              asyncRules={['unique']}
              errors={errors.email}
              handleBlur={handleBlur}
              handleChange={handleChange}
              label="Email"
              name="email"
              rules={['required', 'email']}
              validating={validating.email}
              value={signupValues.email}
            />

            <div className="c-button-group c-button-group--right">
              <button
                className="c-button"
                onClick={() => this.props.changeSignupStage(SIGNUP_SELECT)}
                type="reset"
              >
                Return
              </button>
              <button
                className="c-button c-button--primary"
                disabled={!this.props.isOAuthValid}
                type="submit"
              >
                Looks Good
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

SignupWithOAuth.propTypes = {
  changeSignupStage: PropTypes.func,
  edit: PropTypes.func,
  errors: PropTypes.shape({}),
  signupValues: PropTypes.shape({}),
  isOAuthValid: PropTypes.bool,
  validate: PropTypes.func,
  validating: PropTypes.shape({}),
};

export default SignupWithOAuth;

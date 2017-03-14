import React, { Component, PropTypes } from 'react';

import TextInput from '../../../../Inputs/components/TextInput';

import {
  SIGNUP_EMAIL,
  SIGNUP_OAUTH,
} from '../actions';

const SignupProfile = () => {

  const handleBlur = (form, field, value, rules, asyncRules) => {
    this.props.validate('signup', form, field, value, rules, asyncRules);
  }

  const handleChange = (form, field, value, rules, asyncRules) => {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.props.validate('signup', form, field, value, rules, asyncRules);
    }, 400);

    this.props.edit('signup', form, field, value, rules, asyncRules);
  }

    const {
      error,
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
                <h1 className="c-panel__heading" >Fill out your profile</h1>
              </div>
              <div className="o-layout__item">
                <p className="u-text-right">Step <strong>3</strong> of 3</p>
              </div>
            </div>
          </div>
          <div className="c-panel__content">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                this.props.signup();
              }}
            >
              <div className="o-layout">
                <div className="o-layout__item">
                  <TextInput
                    errors={errors.email}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    label="Email"
                    name="email"
                    rules={['required']}
                    validating={validating.email}
                    value={signupValues.email}
                  />
                </div>

                <div className="o-layout__item u-1/2@lap-and-up">
                  <TextInput
                    errors={errors.password}
                    handleBlur={this.handleBlur}
                    handleChange={this.handleChange}
                    label="Passowrd"
                    name="password"
                    rules={['required']}
                    validating={validating.password}
                    value={signupValues.password}
                  />
                </div>
              </div>
              {error && (
                <p>{error.message}</p>
              )}

              <div className="c-button-group c-button-group--right">
                <button
                  className="c-button"
                  onClick={() => {
                    if (this.props.provider) {
                      return this.props.changeSignupStage(SIGNUP_OAUTH);
                    }

                    return this.props.changeSignupStage(SIGNUP_EMAIL);
                  }}
                  type="reset"
                >
                  Return
                </button>
                <button
                  className="c-button c-button--primary"
                  disabled={!this.props.isProfileValid}
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

SignupProfile.propTypes = {
  changeSignupStage: PropTypes.func,
  edit: PropTypes.func,
  error: PropTypes.object,
  errors: PropTypes.object,
  form: PropTypes.object,
  isProfileValid: PropTypes.bool,
  provider: PropTypes.string,
  signup: PropTypes.func,
  signupValues: PropTypes.object,
  validate: PropTypes.func,
  validating: PropTypes.object,
};

export default SignupProfile;

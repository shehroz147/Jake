import React, { PropTypes } from 'react';

import TextInput from '../../../../Inputs/components/TextInput';

const Login = () => {
  const handleBlur = (field, value, rules, asyncRules) => {
    this.props.validate('login', field, value, rules, asyncRules);
  }

  const handleChange = (field, value, rules, asyncRules) => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.validate('login', field, value, rules, asyncRules);
    }, 400);

    this.props.edit('login', field, value);
  }

    const {
      error,
      errors,
      loginValues,
      validating,
    } = this.props;

    const hasError = (typeof error === 'object') && (Object.keys(error).length > 0);

    return (
      <div className="o-wrapper o-wrapper--narrow">
        <div className="c-panel">
          <div className="c-panel__head u-pv">
            <h1 className="c-panel__heading u-text-center">Login</h1>
          </div>
          <div className="c-panel__content u-p+">
            {hasError && !error.success && (
              <p>{error.message}</p>
            )}

            {!this.state.local && (
              <div>
                <button
                  className="c-button c-button--facebook c-button--block"
                  onClick={() => this.props.loginWithFacebook()}
                >
                  Login with Facebook
                </button>
                <button
                  className="c-button c-button--google c-button--block"
                  onClick={() => this.props.loginWithGoogle()}
                >
                  Login with Google
                </button>
                <button
                  className="c-button c-button--primary c-button--block"
                  onClick={() => { this.setState({ local: true }); }}
                >
                  Login with Email
                </button>
              </div>
            )}

            {this.state.local && (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  this.props.loginWithEmail();
                }}
              >
                <TextInput
                  errors={errors.email}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  label="Email"
                  name="email"
                  rules={['required', 'email']}
                  validating={validating.email}
                  value={loginValues.email}
                />
                <TextInput
                  errors={errors.password}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  hidden
                  label="Password"
                  name="password"
                  rules={['required']}
                  validating={validating.password}
                  value={loginValues.password}
                />
                <div className="c-button-group c-button-group--right">
                  <button
                    className="c-button"
                    onClick={() => { this.setState({ local: false }); }}
                    type="reset"
                  >
                    Back
                  </button>
                  <button
                    className="c-button c-button--primary"
                    disabled={!this.props.isLocalValid}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
          )}
          </div>
        </div>
      </div>
    );
};

Login.propTypes = {
  edit: PropTypes.func,
  error: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  fetching: PropTypes.bool,
  isLocalValid: PropTypes.bool,
  loginValues: PropTypes.shape({}),
  loginWithEmail: PropTypes.func,
  loginWithFacebook: PropTypes.func,
  loginWithGoogle: PropTypes.func,
  validate: PropTypes.func,
  validating: PropTypes.shape({}),
};

export default Login;

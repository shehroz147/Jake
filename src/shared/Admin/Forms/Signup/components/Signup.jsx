import React, { PropTypes } from 'react';

import SignupProfile from './SignupProfile';
import SignupSelect from './SignupSelect';
import SignupSuccess from './SignupSuccess';
import SignupWithEmail from './SignupWithEmail';
import SignupWithOAuth from './SignupWithOAuth';

const Signup = (props) => {
  const propsToCopy = {
    changeSignupStage: props.changeSignupStage,
    edit: props.edit,
    errors: props.errors,
    provider: props.provider,
    signupValues: props.signupValues,
    validate: props.validate,
    validating: props.validating,
  };

  switch (props.stage) {
    case 1:
      return (
        <SignupWithOAuth
          isOAuthValid={props.isOAuthValid}
          {...propsToCopy}
        />
      );
    case 2:
      return (
        <SignupWithEmail
          isLocalValid={props.isLocalValid}
          {...propsToCopy}
        />
      );
    case 3:
      return (
        <SignupProfile
          error={props.error}
          isProfileValid={props.isProfileValid}
          signup={props.signup}
          {...propsToCopy}
        />
      );
    case 4:
      return <SignupSuccess />;
    case 0:
    default:
      return (
        <SignupSelect
          changeSignupStage={props.changeSignupStage}
          signupWithEmail={props.signupWithEmail}
          signupWithFacebook={props.signupWithFacebook}
          signupWithGoogle={props.signupWithGoogle}
        />
      );
  }
};

Signup.propTypes = {
  changeSignupStage: PropTypes.func,
  edit: PropTypes.func,
  error: PropTypes.shape({}),
  errors: PropTypes.shape({}),
  isLocalValid: PropTypes.bool,
  isOAuthValid: PropTypes.bool,
  isProfileValid: PropTypes.bool,
  provider: PropTypes.string,
  signup: PropTypes.func,
  signupValues: PropTypes.shape({}),
  signupWithEmail: PropTypes.func,
  signupWithFacebook: PropTypes.func,
  signupWithGoogle: PropTypes.func,
  stage: PropTypes.number,
  validate: PropTypes.func,
  validating: PropTypes.shape({}),
}

export default Signup;

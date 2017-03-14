import { connect } from 'react-redux';
import get from 'lodash/get';

import Signup from '../components/Signup';
import * as formActions from '../../actions';
import * as signupActions from '../actions';
import { isFormValid } from '../../../../utils/validators';

const LOCAL_FIELDS = ['email', 'password'];
const OAUTH_FIELDS = ['email'];
const PROFILE_FIELDS = ['firstName', 'lastName'];

const defaultForm = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
};

const mapStateToProps = ({ auth, forms, signup }) => {
  const stage = signup;

  const form = forms.signup || {};
  const {
    errors = {},
    validating = {},
    values = {},
  } = form;

  const signupWithDefaults = {
    ...defaultForm,
    ...values,
  };

  const provider = get(forms, 'signup.values.provider.provider');

  const isLocalValid = isFormValid(LOCAL_FIELDS, form);
  const isOAuthValid = isFormValid(OAUTH_FIELDS, form);
  const isProfileValid = isFormValid(PROFILE_FIELDS, form);

  return {
    error: auth.error,
    errors,
    isLocalValid,
    isOAuthValid,
    isProfileValid,
    provider,
    signupValues: signupWithDefaults,
    stage,
    validating,
  };
};

export default connect(mapStateToProps, { ...formActions, ...signupActions })(Signup);

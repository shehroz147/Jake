import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from '';
import { isFormValid } from '';
import * as formActions from '';
import * as loginActions from '';

const LOCAL_FIELDS = ['email', 'password'];

const defaultForm = {
  email: '',
  password: '',
};

const mapStateToProps = ({ auth, forms }) => {
  const { error, fetching } = auth;

const form = forms.login || {};

  const {
    errors = {},
    validating = {},
    values = {},
  } = form;

  const loginValues = {
    ...defaultForm,
    ...values,
  };

  const isLocalValid = isFormValid(LOCAL_FIELDS, form);

  return {
    error,
    errors,
    fetching,
    isLocalValid,
    loginValues,
    validating,
  };
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    ...formActions,
    ...loginActions,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps(Login));

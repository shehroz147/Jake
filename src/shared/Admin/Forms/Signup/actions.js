/* global FB, auth2 */
import axios from 'axios';

import API_URL from '../../../utils/apiUrl';
import { loginFailed, loginSuccess } from '../Login/actions';
import { edit, empty, validate } from '../actions';

export const SIGNUP_SELECT = 0;
export const SIGNUP_OAUTH = 1;
export const SIGNUP_EMAIL = 2;
export const SIGNUP_PROFILE = 3;
export const SIGNUP_SUCCESS = 4;

export const changeSignupStage = stage => ({
  type: 'CHANGE SIGNUP STAGE',
  payload: stage,
});

export const signup = () => (dispatch, getState) => {
  const fields = getState().forms.signup.values;
  const user = {
    email: fields.email,
    password: fields.password,
    provider: fields.provider,
    profile: {
      firstName: fields.firstName,
      lastName: fields.lastName,
    },
  };

  axios.post(`${API_URL}/auth/signup`, user)
    .then(({ data }) => {
      if (data.success) {
        dispatch(loginSuccess(data));
        dispatch(empty('signup'));
      } else {
        dispatch(loginFailed(data));
      }
    })
    .catch(error => {
      dispatch(loginFailed(error));
    });
};

export const signupWithFacebook = () => dispatch => {
  FB.login((response) => {
    if (response.status === 'connected') {
      const authResponse = response.authResponse;

      dispatch(edit('signup', 'provider', {
        provider: 'facebook',
        token: authResponse.accessToken,
        userID: authResponse.userID,
      }));

      FB.api('/profile', { fields: 'email,first_name,last_name' }, (profile) => {
        dispatch(edit('signup', 'email', profile.email));
        dispatch(validate('signup', 'email', profile.email, ['required', 'email'], ['unique'], true));
        dispatch(edit('signup', 'firstName', profile.first_name));
        dispatch(validate('signup', 'firstName', profile.first_name, ['required']));
        dispatch(edit('signup', 'lastName', profile.last_name));
        dispatch(validate('signup', 'lastName', profile.last_name, ['required']));
        dispatch(changeSignupStage(SIGNUP_OAUTH));
      });
    }
  }, { scope: 'public_profile,email' });
};

export const signupWithGoogle = () => (dispatch) => {
  auth2.signIn().then((googleUser) => {
    const profile = googleUser.getBasicProfile();
    const authResponse = googleUser.getAuthResponse();

    dispatch(edit('signup', 'provider', {
      provider: 'google',
      token: authResponse.access_token,
      userID: profile.getId(),
    }));

    dispatch(edit('signup', 'email', profile.getEmail()));
    dispatch(validate('signup', 'email', profile.getEmail(), ['required', 'email'], ['unique'], true));
    dispatch(edit('signup', 'firstName', profile.getGivenName()));
    dispatch(validate('signup', 'firstName', profile.getGivenName(), ['required']));
    dispatch(edit('signup', 'lastName', profile.getFamilyName()));
    dispatch(validate('signup', 'lastName', profile.getFamilyName(), ['required']));
    dispatch(changeSignupStage(SIGNUP_OAUTH));
  });
};

export const removeProvider = form => ({
  type: 'remove provider',
  payload: {
    form,
  },
});

export const signupWithEmail = () => (dispatch) => {
  dispatch(removeProvider('signup'));
  dispatch(changeSignupStage(SIGNUP_EMAIL));
};

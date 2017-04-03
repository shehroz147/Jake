/* global FB, auth2 */
import axios from 'axios';

import API_URL from '../../../utils/apiUrl';
// import { loginFailed, loginSuccess } from './login';
// import { edit, empty, validate } from './forms';

export const SIGNUP_SELECT = 0;
export const SIGNUP_OAUTH = 1;
export const SIGNUP_EMAIL = 2;
export const SIGNUP_PROFILE = 3;
export const SIGNUP_SUCCESS = 4;

/**
 * Change Signup State
 * Changes the component returned from <Signup> depending on the current state of signup. This may
 * be changed later to use react-router (v4 compat.?) to enable back/forward browser history.
 * @param {String} stage - the stage to view (should match one of the consts above)
 * @return {Object} - redux action
 */
export const changeSignupStage = stage => ({
  type: 'change signup stage',
  payload: stage,
});

/**
 * Signup
 * POST signup form data to the API.
 */
export const signup = () => (dispatch, getState) => {
  const fields = getState().forms.signup.values;
  const user = {
    email: fields.email,
    password: fields.password,
    provider: fields.provider,
    profile: {
      firstName: fields.firstName,
      lastName: fields.lastName,
      school: fields.school,
      teacher: fields.teacher,
      grade: fields.grade,
    },
  };

  axios.post(`${API_URL}/auth/signup`, user)
    .then(({ data }) => {
      if (data.success) {
        dispatch(loginSuccess(data));
        dispatch(empty('signup'));
        dispatch(changeSignupStage(SIGNUP_SUCCESS));
      } else {
        dispatch(loginFailed(data));
      }
    })
    .catch(error => {
      dispatch(loginFailed(error));
    });
};

/**
 * Signup with Facebook
 * Attempt to login via the Facebook JS SDK. If the OAuth returns successfully, grab the user's
 * profile information and prompt for a confirmation.
 */
export const signupWithFacebook = () => dispatch => {
  // Prompt the user to login with the Facebook SDK.
  FB.login(response => {
    if (response.status === 'connected') {
      const authResponse = response.authResponse;

      // If they connect, add the authResponse to our forms object. This will be saved as a
      // Provider in the database.
      dispatch(edit('signup', 'provider', {
        provider: 'facebook',
        token: authResponse.accessToken,
        userID: authResponse.userID,
      }));

      // Attempt to get their profile information from the FB API so they don't have to re-enter it.
      FB.api('/me', { fields: 'email,first_name,last_name' }, profile => {
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

/**
 * Signup with Google
 */
export const signupWithGoogle = () => dispatch => {
  auth2.signIn().then(googleUser => {
    const profile = googleUser.getBasicProfile();
    const authResponse = googleUser.getAuthResponse();

    // Send googleUser to access both authResponse and userID... because google ¯\_(ツ)_/¯
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

/**
 * Remove Provider
 * Removes the provider from the auth key in signup form when a user clicks "Sign up with Email"
 * to prevent unwanted connection to an OAuth account during registration.
 * @param {String} form - the form key to remove auth from
 * @return {Object} - Redux action
 */
export const removeProvider = form => ({
  type: 'remove provider',
  payload: {
    form,
  },
});

/**
 * Signup with Email
 */
export const signupWithEmail = () => dispatch => {
  dispatch(removeProvider('signup'));
  dispatch(changeSignupStage(SIGNUP_EMAIL));
};

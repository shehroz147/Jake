/* global FB, auth2 */

import axios from 'axios';
import browserHistory from 'react-router/lib/browserHistory';

import API_URL from '../../../utils/apiUrl';
// import { addNotificationWithTimeout } from './notifications';
// import { empty } from './forms';

export const loginSuccess = response => ({
  type: 'login success',
  payload: response,
});

export const loginFailed = response => ({
  type: 'login fail',
  payload: response,
});

export const logoutSuccess = response => ({
  type: 'logout success',
  payload: response,
});

export const loginWithEmail = () => (dispatch, getState) => {
  dispatch({ type: 'login' });
  axios.post(`${API_URL}/auth/local`, getState().forms.login.values)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      dispatch(empty('login'));
      // dispatch(addNotificationWithTimeout('success', 'Login successful.'));
      // Redirect to profile.
      browserHistory.push('/me');
    })
    .catch(({ response }) => dispatch(loginFailed(response.data)));
};

export const loginWithFacebook = () => (dispatch) => {
  FB.login(response => {
    if (response.status === 'connected') {
      const { authResponse: { userID } } = response;
      axios.post(`${API_URL}/auth/facebook`, { userID })
        .then(({ data }) => {
          dispatch(loginSuccess(data));
          // dispatch(addNotificationWithTimeout('success', 'Login with Facebook successful.'));
          browserHistory.push('/me');
        })
        .catch(error => dispatch(loginFailed(error.response.data)));
    } else {
      // dispatch(addNotificationWithTimeout('error', 'Failed to login with Facebook.'));
    }
  }, { scope: 'public_profile,email' });
};

export const loginWithGoogle = () => (dispatch) => {
  auth2.signIn().then(googleUser => {
    const userID = googleUser.getBasicProfile().getId();
    axios.post(`${API_URL}/auth/google`, { userID })
      .then(({ data }) => {
        dispatch(loginSuccess(data));
        dispatch(addNotificationWithTimeout('success', 'Login with Facebook successful.'));
        browserHistory.push('/me');
      })
      .catch(error => dispatch(loginFailed(error.response.data)));
  });
};

export const logout = () => (dispatch) => {
  dispatch({ type: 'logout' });
  return axios.get(`${API_URL}/auth/logout`)
    .then(({ data }) => {
      dispatch(logoutSuccess(data));
      // dispatch(addNotificationWithTimeout('success', 'Logout successful.'));
      // Redirect to login.
      browserHistory.push('/login');
    })
    .catch(console.error);
};

import axios from 'axios';
import browserHistory from 'react-router/lib/browserHistory';

import API_URL from '../../../utils/apiUrl';
// import { empty } from './forms';

export const loginSuccess = responce => ({
  type: 'LOGIN SUCCESS',
  payload: responce,
});

export const loginFailed = responce => ({
  type: 'LOGIN FAILED',
  payload: responce,
});

export const logoutSuccess = responce => ({
  type: 'LOGOUT SUCCESS',
  payload: responce,
});

export const login = () => (dispatch, getState) => {
  dispatch({ type: 'login' });
  axios.post(`${API_URL}/auth/local`, getState().forms.login.values)
    .then(({ data }) => {
      dispatch(loginSuccess(data));
      dispatch(empty('login'));
      browserHistory.push('/profile');
    });
};

export const logout = () => dispatch => {
  dispatch({ type: 'logout' });
  return axios.get(`${API_URL}/auth/logout`)
    .then(({ data }) => {
      dispatch(logoutSuccess(data));
      browserHistory.push('/login');
    })
    .catch(console.error);
};

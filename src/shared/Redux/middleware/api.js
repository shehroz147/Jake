import axios from 'axios';
import { normalize } from 'normalizr';

import API_URL from '../../utils/apiUrl';

export const callApi = (endpoint, schema) => (
  axios.get(`${API_URL}/${endpoint}`)
    .then(({ data }) => normalize(data, schema))
);

export const CALL_API = Symbol('Call API');

export default () => next => (action) => {
  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { types, schema, endpoint } = callAPI;

  const actionWith = (data) => {
    const finalAction = { ...action, ...data };
    delete finalAction[CALL_API];
    return finalAction;
  };

  const [requestType, successType, failureType] = types;

  next(actionWith({ type: requestType }));

  return callApi(endpoint, schema)
    .then(response => next(actionWith({ type: successType, response })))
    .catch(error => next(actionWith({ type: failureType, error })));
};

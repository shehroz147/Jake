export const retrieveData = data => {
  return {
    type: 'RETRIEVE_DATA',
    payload: data,
  };
};

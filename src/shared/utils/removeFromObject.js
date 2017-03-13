export default (obj, predicate) => (
  Object.keys(obj).reduce((result, key) => {
    if (predicate(key)) {
      result[key] = obj[key]; // eslint-disable-line
    }

    return result;
  }, {})
);

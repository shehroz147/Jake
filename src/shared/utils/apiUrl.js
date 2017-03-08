export default (() => {
  if (process.env.NODE_ENV === 'production') {
    return 'http://civichealthindex.com/api';
  }

  return 'http://localhost:3001/api';
})();

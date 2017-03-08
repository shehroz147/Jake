export default {
  process: (req, res) => {
    req.logout();
    return res.redirect('/');
  },
};

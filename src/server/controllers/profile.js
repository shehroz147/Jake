export default {
  view: (req, res) => {
    res.render('profile', {
      user: req.user,
    });
  },
};

import User from '../models/User';

export default {
  view: (req, res) => {
    res.render('signup');
  },

  process: (req, res, next) => {
    User.create(req.body)
    .then((user) => {
      res.render('index', { user });
    })
    .catch((error) => {
      console.log(error);
    });
  },
};

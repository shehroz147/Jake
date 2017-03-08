import passport from 'passport';

export default {
  view: (req, res) => {
    res.render('login');
  },

  process: (req, res, next) => {
    passport.authenticate('local', (error, user) => {
      if (error) {
        return next(error);
      }

      if (!user) {
        return res.json('/login');
      }

      return req.login(user, (err) => {
        if (err) {
          return next(err);
        }

        return res.json({
          user,
        });
      });
    })(req, res, next);
  },
};

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import User from '../models/User';

passport.serializeUser((user, done) =>
  done(null, user.id));

passport.deserializeUser((userId, done) => {
  User.findById(userId)
    .select('id email role')
    .then(user => done(null, user))
    .catch(error => done(error));
});

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  (email, password, done) => {
    User.findOne({ email })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      })
      .catch(error => done(error));
  },
));

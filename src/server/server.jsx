/* eslint no-console: ["error", { allow: ["warn", "error", "log", "info"] }] */
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import Express from 'express';
import hbs from 'express-handlebars';
import mongoose from 'mongoose';
import passport from 'passport';
import { Provider } from 'react-redux';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import session from 'express-session';

import NotFoundPage from '../shared/App/components/NotFoundPage';

import data from '../shared/Data/data.json';
import Routes from '../shared/Routes';
import createStore from '../shared/Redux/createStore';
import { retrieveData } from '../shared/Data/actions';

import { handlebars } from './config';
import login from './controllers/login';
import logout from './controllers/logout';
import profile from './controllers/profile';
import signup from './controllers/signup';

const ROOT_DIR = path.resolve(__dirname, '../..');
const STATIC_DIR = path.resolve(ROOT_DIR, 'static');

const COOKIE_SECRET = 'cookieMonsta';
const COOKIE_NAME = 'oreos';

mongoose.connect('localhost/health');

const server = new Express();

server.engine('.hbs', hbs(handlebars));
server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'hbs');

server.use(Express.static(STATIC_DIR));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true,
}));

server.use(cookieParser());
server.use(session({
  secret: COOKIE_SECRET,
  name: COOKIE_NAME,
  proxy: true,
  resave: true,
  saveUninitialized: true,
}));
server.use(passport.initialize());
server.use(passport.session());

server.use((req, res, next) => {
  const responce = res;

  responce.locals.authenticated = false;

  if (req.isAuthenticated()) {
    responce.locals.authenticated = true;
  }

  next();
});

const authenticate = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }

  return next();
};

// server.get('/', (req, res) => {
//   res.render('index');
// });

// server.get('/login', login.view);
server.post('/login', login.process);

// server.get('/signup', signup.view);
server.post('/signup', signup.process);

server.get('/profile', authenticate, profile.view);

server.get('/logout', logout.process);

server.use((req, res, next) => {
  match({ routes: Routes, location: req.originalUrl }, (err, redirect, props) => {
    if (err) {
      return next(err);
    } else if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      const store = createStore();

      store.dispatch(retrieveData(data));

      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>,
      );

      return res.render('index', {
        markup,
        state: JSON.stringify(store.getState()),
      });
    }

    return res.status(404).send(<NotFoundPage />);
  });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.info(`Server running on http://localhost:${port} [${env}]`);
});

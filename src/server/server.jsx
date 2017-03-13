import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import express from 'express';
import React from 'react';
import mongoose from 'mongoose';
import path from 'path';
import passport from 'passport';
import session from 'express-session';

import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import NotFoundPage from '../shared/App/components/NotFoundPage';

import data from '../shared/Data/data.json';
import Routes from '../shared/Routes';
import createStore from '../shared/Redux/createStore';
import { retrieveData } from '../shared/Data/actions';

import login from './controllers/login';
import logout from './controllers/logout';
import signup from './controllers/signup';

const ROOT_DIR = path.resolve(__dirname, '../..');
const STATIC_DIR = path.resolve(ROOT_DIR, 'static');

mongoose.connect('localhost/health');

// initialize the server and configure support for ejs templates
const server = express();

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
server.use(express.static(STATIC_DIR));

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: true,
}));
server.use(cookieParser());
server.use(session({
  secret: 'yo mama',
  name: 'SomeSecret',
  // store: sessionStore,
  proxy: true,
  resave: true,
  saveUninitialized: true,
}));
server.use(passport.initialize());
server.use(passport.session());

// passport middleware
server.use((req, res, next) => {
  res.locals.authenticated = false;

  if (req.isAuthenticated()) {
    res.locals.authenticated = true;
  }

  next();
});

const authenticate = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.redirect('/login');
  }
  return next();
};


// server.post('/login', login.process);
//
// server.post('/signup', signup.process);
//
// server.get('/logout', logout.process);

server.use((req, res, next) => {
  match({ routes: Routes, location: req.originalUrl }, (err, redirect, props) => {
    if (err) {
      return next(err);
    } else if (redirect) {
      return res.redirect(302, redirect.pathname + redirect.search);
    } else if (props) {
      const store = createStore();

      if (req.isAuthenticated()) {
        store.dispatch(login(req.user));
      }

      store.dispatch(retrieveData(data));

      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
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

server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});

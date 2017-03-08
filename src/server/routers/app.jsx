import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Router } from 'express';
import { Provider } from 'react-redux';
import Promise from 'bluebird';
import createStore from '../../shared/Redux/createStore';
import Routes from '../../shared/Routes';

// import render from '../render';
// import fetch from '../fetch';

import data from '../../shared/Data/data.json';
import NotFoundPage from '../../shared/App/components/NotFoundPage';
import { retrieveData } from '../../shared/Data/action';

const app = new Router();

app.use((req, res, next) => {
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

export default app;

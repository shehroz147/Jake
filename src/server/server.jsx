import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import NotFoundPage from '../shared/App/components/NotFoundPage';

import data from '../shared/Data/data.json';
import Routes from '../shared/Routes';
import createStore from '../shared/Redux/createStore';
import { retrieveData } from '../shared/Data/action';

const ROOT_DIR = path.resolve(__dirname, '../..');
const STATIC_DIR = path.resolve(ROOT_DIR, 'static');

// initialize the server and configure support for ejs templates
const app = new Express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(STATIC_DIR));

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

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});

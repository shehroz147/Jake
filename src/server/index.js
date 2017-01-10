import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { resolve } from 'path';

import data from '../shared/Data/data.json';
import Routes from '../shared/Routes';
import createStore from '../shared/Redux/createStore';
import { retrieveData } from '../shared/Data/action';

const server = express();


server.engine('handlebars', exphbs({
  defaultLayout: 'default',
  layoutsDir: resolve(__dirname, './views/layouts'),
  partialsDir: resolve(__dirname, './views'),
}));

server.set('view engine', 'handlebars');
server.set('views', resolve(__dirname, './views'));

server.use(express.static(resolve(__dirname, '../../static')));

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
        </Provider>
      );

      return res.render('index', {
        markup,
        state: JSON.stringify(store.getState()),
      });
    }

    return res.status(404).send('Not Found.');
  });
});

server.listen(8001, () => console.log('Listening on port 8001'));

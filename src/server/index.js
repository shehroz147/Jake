import Express from  'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import routes from '../common/routes';
import compression from 'compression';
import path from 'path';
import configureStore from '../common/Redux/configureStore';
import rootReducer from '../common/Redux/rootReducer';

import { retrieveData } from '../common/Data/actions';
import stateData from '../common/Data/stateData.json';
import metroData from '../common/Data/metroData.json';

const server = new Express();

server.use(compression());

server.use((req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err){
      res.status(500).send(err.messge)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const store = configureStore();

      store.dispatch(retrieveData(stateData));
      store.dispatch(retrieveData(metroData));

      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );

      const preloadedState = store.getState();

      res.send(renderPage(markup, preloadedState));
    } else {
      res.status(404).send('Not Found');
    }
  })
})

const renderPage = (markup, preloadedState) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Boilerplate</title>
        <link rel="stylesheet" href="" />
      </head>
      <body>
        <div id="app">${markup}</div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="http://localhost:8080/js/bundle.js" type="text/javascript"></script>
      </body>
    </html>
  `;
};

const PORT = process.env.PORT || 3000
server.listen(PORT, () => {
  console.log("Express Server Running @ localhost:" + PORT);
});

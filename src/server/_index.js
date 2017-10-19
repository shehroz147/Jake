import compression from 'compression';
import Express from  'express';
import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { resolve } from 'path';

import createStore from '../common/Redux/createStore';
import metroData from '../common/Data/metroData.json';
import routes from '../common/routes';
import stateData from '../common/Data/stateData.json';

import { retrieveData } from '../common/Data/actions';

const server = new Express();

server.use(compression());

server.use(Express.static(resolve(__dirname, '../../static'), { maxAge: '1y' }));

server.use((req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err){
      res.status(500).send(err.messge)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const store = createStore();
      const sheets = new SheetsRegistry();

      store.dispatch(retrieveData(stateData));
      store.dispatch(retrieveData(metroData));

      const markup = renderToString(
        <JssProvider registry={sheets}>
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        </JssProvider>
      );

      const preloadedState = store.getState();

      res.send(renderPage(markup, preloadedState, sheets));
    } else {
      res.status(404).send('Not Found');
    }
  })
})

const renderPage = (markup, preloadedState, sheets) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Civic Health Index</title>
        <style id="js-server-side-styles" type="text/css">
          ${sheets.toString()}
        </style>
      </head>
      <body>
        <div id="js-react">${markup}</div>
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

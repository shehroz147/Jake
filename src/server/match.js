import Helmet from 'react-helmet';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import {
  defaultTheme,
  GlobalStyles,
  WolfsharkThemeProvider as MakoThemeProvider,
} from 'react-mako';

import createStore from '../common/Redux/createStore';
import metroData from '../common/Data/metroData.json';
import routes from '../common/routes';
import stateData from '../common/Data/stateData.json';
import { retrieveData } from '../common/Data/actions';

const production = process.env.NODE_ENV === 'production';

let scripts = {
  "scripts.js": "http://localhost:8080/js/bundle.js",
};

if (production) {
  scripts = require('../../static/js/manifest.json');
}

function renderComponentWithRoot(props) {
  const store = createStore();
  const sheets = new SheetsRegistry();

  store.dispatch(retrieveData(stateData));
  store.dispatch(retrieveData(metroData));

  const html = renderToString(
    <JssProvider registry={sheets}>
      <MakoThemeProvider theme={defaultTheme}>
        <GlobalStyles>
          <Provider store={store}>
            <RouterContext {...props} />
          </Provider>
        </GlobalStyles>
      </MakoThemeProvider>
    </JssProvider>
  );

  // Helmet.renderStatic method must come after React.renderToString!
  const helmet = Helmet.renderStatic();

  const renderScriptTags = Object.keys(scripts)
    .filter(script => !/\.js\.map$/.test(scripts[script]))
    .reverse()
    .map(script => (
      `<script src="${scripts[script]}" type="text/javascript"></script>`
    ));

  return `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        <style id="js-server-side-styles" type="text/css">
          ${sheets.toString()}
        </style>
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="js-react">${html}</div>
        <script type="text/javascript">
          window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())};
        </script>
        ${renderScriptTags.join('\n')}
      </body>
    </html>
  `;
}

function handleError(res, error) {
  res.status(500).send(error.message);
}

function handleRedirect(res, redirectLocation) {
  res.redirect(302, redirectLocation.pathname + redirectLocation.search);
}

function handleRoute(res, props) {
  res.send(renderComponentWithRoot(props));
}

function handleNotFound(res) {
  res.status(404).send('Not Found');
}

export default (req, res) => {
  match({ routes, location: req.url }, (error, redirect, props) => {
    if (error) {
      return handleError(res, error);
    } else if (redirect) {
      return handleRedirect(res, redirect);
    } else if (props) {
      return handleRoute(res, props);
    }

    return handleNotFound(res);
  });
};

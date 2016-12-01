
import express from 'express';
import exphbs from 'express-handlebars';
import React from 'react';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-dom/server';
import { resolve } from 'path';

const server = express();

server.engine('handlebars', exphbs({
  defaultLayout: 'default',
  layoutsDir: resolve(__dirname, './views/layouts'),
  partialsDir: resolve(__dirname, './views'),
}));

server.set('view engine', 'handlebars');
server.set('views', resolve(__dirname, './views'));

server.use(express.static(resolve(__dirname, '../../static')));

server.listen(8001, () => console.log('Listening on port 8001'));

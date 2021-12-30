import compression from 'compression';
import express from 'express';
import path from 'path';

import match from './match';

const server = express();

server
  .use(compression())
  .use(express.static(path.join(__dirname, '../..', 'static'), { maxAge: '1y' }))
  .use(match)
  .listen(3001, () => console.log('> Express running.'));

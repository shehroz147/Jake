import { resolve } from 'path';

const ROOT_DIR = resolve(__dirname, '../../../');
const SERVER_DIR = resolve(ROOT_DIR, 'src', 'server');
const VIEWS_DIR = resolve(SERVER_DIR, 'views');
const LAYOUTS_DIR = resolve(VIEWS_DIR, 'layouts');
const PARTIALS_DIR = resolve(VIEWS_DIR, 'partials');

export default {
  PARTIALS_DIR,
  ROOT_DIR,
  SERVER_DIR,
  LAYOUTS_DIR,
  VIEWS_DIR,
};

import bodyParser from 'body-parser';
// import cors from './cors';
import { Router } from 'express';

import uploads from '../controllers/uploads';
// import login from '../controllers/login';
// import logout from '../controllers/logout';
// import signup from '../controllers/signup';

// import config from '../config';

const router = new Router();

// router.use(cors(config.cors));

router.route('/uploads')
  .get(uploads.list)
  .post(bodyParser.json(), uploads.create);

router.route('/uploads/:uploadId')
  .get(uploads.read)
  .put(bodyParser.json(), uploads.update)
  .delete(uploads.delete);

// router.route('/login')
//   .get()
//   .post(bodyParser.urlencoded())

export default router;

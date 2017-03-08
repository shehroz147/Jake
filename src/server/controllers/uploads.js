import Uploads from '../models/Uploads';

export default {

  list(req, res, next) {
    Uploads
      .find()
      .populate()
      .sort()
      .lean()
      .exec()
      .then(upload => res.json(upload))
      .catch(next);
  },

  create(req, res, next) {
    Uploads.create(req.body)
      .then(upload => res.json(upload))
      .catch(next);
  },

  read(req, res, next) {
    Uploads.findById(req.params.uploadId).populate('reports').lean().exec()
      .then(upload => res.json(upload))
      .catch(next);
  },

  update(req, res, next) {},

  delete(req, res, next) {},

};

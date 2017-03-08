// import fs from 'fs-extra';
import mongoose, { Schema } from 'mongoose';
import Promise from 'bluebird';

mongoose.Promise = Promise;

const UploadSchema = new Schema({
  name: String,
  size: String,
  path: String,
  uri: String,
});

// UploadSchema.post('remove', function removeFile(next) {
//   fs.removeSync(this.path);
// });

export default mongoose.model('Upload', UploadSchema);

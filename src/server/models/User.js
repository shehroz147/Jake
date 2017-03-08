import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';
import Promise from 'bluebird';
import shortid from 'shortid';

const SALT_WORK_FACTOR = 10;

mongoose.Promise = Promise;

const UserSchema = new Schema({
  _id: {
    default: shortid.generate,
    type: String,
  },

  _gid: {
    default: shortid.generate,
    type: String,
  },

  email: {
    required: [true, 'Email is required'],
    type: String,
    unique: true,
  },

  password: {
    requires: [true, 'Please enter a password'],
    type: String,
  },

  created_at: {
    default: Date.now,
    type: Date,
  },
});

UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model('User', UserSchema);

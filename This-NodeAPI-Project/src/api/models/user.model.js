const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
      type: String,
      default: 'user',
      enum: ['admin', 'user'],
    },
    image: { type: String, default: "" }
  },
  {
    collection: 'user',
  }
);
const User = mongoose.model('user', userSchema);
module.exports = User;

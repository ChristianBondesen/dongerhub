const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  admin: Boolean,
  salt: String,
});
mongoose.model('dongerhub-user', userSchema);

module.exports = mongoose.model('dongerhub-user');

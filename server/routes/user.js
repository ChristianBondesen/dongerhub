const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  admin: Boolean
});
mongoose.model('dongerhub-user', userSchema);

module.exports = mongoose.model('dongerhub-user');

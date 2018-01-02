var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  password: String
});
mongoose.model('User', userSchema);

module.exports = mongoose.model('User');

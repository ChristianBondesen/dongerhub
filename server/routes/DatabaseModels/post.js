const mongoose = require('mongoose');
const user = require('./user');

let postSchema = new mongoose.Schema({
  post: String,
  author: String
});

mongoose.model('dongerhub-post', postSchema);

module.exports = mongoose.model('dongerhub-post');

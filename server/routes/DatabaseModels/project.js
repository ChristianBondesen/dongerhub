const mongoose = require('mongoose');
const user = require('./user');         //users on the project

let projectSchema = new mongoose.Schema({
  projectName: String,
  users: String,
  hoursSpent: Number,
});

mongoose.model('dongerhub-project', projectSchema);

module.exports = mongoose.model('dongerhub-project');

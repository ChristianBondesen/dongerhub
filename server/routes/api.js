const express = require('express');
const router = express.Router();

const db = require('./db'); // eslint-disable-line no-unused-vars

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('still wurks');
});
// Authentication of users and token generation
const auth = require('./Controllers/authentication.js');
router.use('/auth', auth);

// User conntrol
const UserController = require('./Controllers/UserController');
router.use('/users', UserController);

const PostController = require('./Controllers/PostController');
router.use('/posts', PostController)

const ProjectController = require('./Controllers/ProjectController');
router.use('/projects', ProjectController)

module.exports = router;

const express = require('express');
const router = express.Router();

const db = require('./db'); // eslint-disable-line no-unused-vars

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('still wurks');
});
const auth = require('./authentication.js');
router.use('/auth', auth);
// ADD THESE TWO LINES
const UserController = require('./UserController');
router.use('/users', UserController);

module.exports = router;

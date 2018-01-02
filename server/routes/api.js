const express = require('express');
const router = express.Router();
var db = require('./db');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('still wurks');
});

// ADD THESE TWO LINES
var UserController = require('./UserController');
router.use('/users', UserController);

module.exports = router;

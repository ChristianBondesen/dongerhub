const express = require('express');
const authRout = express.Router();
const config = require('./config.js');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
authRout.use(bodyParser.urlencoded({ extended: true }));
authRout.use(bodyParser.json());
const User = require('./user.js');

authRout.post('', (req, res) => {
  User.findOne(
    {
      username: req.body.username
    },
    function(err, user) {
      if (err) throw err;

      if (user && user.password === req.body.password) {
        const payload = {
          admin: false
        };
        let token = jwt.sign(payload, config.secret, {
          expiresIn: '1h'
        });
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          expiration: new Date(),
          token: token
        });
      } else {
        res.json({
          success: false,
          message: 'Unknown user or password '
        });
      }
    }
  );
});
module.exports = authRout;

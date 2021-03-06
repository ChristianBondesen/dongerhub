const express = require('express');
const authRout = express.Router();
const config = require('../config.js');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
authRout.use(bodyParser.urlencoded({
  extended: true
}));
authRout.use(bodyParser.json());
const User = require('../DatabaseModels/user.js');
const hasher = require('../PasswordHasher');

authRout.post('', (req, res) => {
  User.findOne({
      username: req.body.username
    },
    function (err, user) {

      if (err) throw err;

      if (!user) {
        return res.status(404).json({
          status: false,
          error: 'notFound'
        });
      }

      const hashedPw = hasher.VerifyPassword(req.body.password, user.salt).passwordHash;
      if (hashedPw === user.password) {
        const payload = {
          username: user.username,
          admin: user.admin
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

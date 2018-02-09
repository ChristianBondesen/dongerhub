// UserController.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(bodyParser.json());
const User = require('../DatabaseModels/user.js');
const config = require('../config.js');
const jwt = require('jsonwebtoken');

const UserControl = require('../LoginHelp');
const _userControl = new UserControl(User);

const message = require('../Responses');

// CREATES A NEW USER
router.post('/', async (req, res) => {
  try {
    let returnData = await _userControl.method(req.body);
    res.status(200).json(returnData);
  } catch (e) {
    console.log(e);
  }

});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function (req, res) {
  User.find({}, function (err, users) {
    if (err) {
      return res.status(500).send('There was a problem finding the users.');
    }
    return res.status(200).send(
      users.map(item => {
        return {
          id: item._id,
          name: item.name,
          username: item.username
        };

      })
    );
  });
});

// Secure routes - only authenticated users
router
  .use((req, res, next) => {
    // check header or url parameters or post parameters for token
    let token =
      req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Failed to authenticate token.',
            error: err
          });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  })
  .put('/:id', function (req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body, {
        new: true
      },
      (err, user) => {
        if (user === null) {
          return res.status(500).send('There was a problem updating the user.');
        } else {
          res.status(200).send(user);
        }
      }
    );
  })
  .delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
      if (err) {
        return res.status(500).send('There was a problem deleting the user.');
      }
      res.status(200).send('User ' + user.name + ' was deleted.');
    });
  });
// Find specific user
router.get('/:id', function (req, res) {
  User.findById(req.params.id, function (err, user) {
    if (err) {
      return res.status(500).send('There was a problem finding the user.');
    }
    if (!user) return res.status(404).send('No user found.');
    if (req.decoded.admin) {
      res.status(200).send(user);
    } else {
      res.status(200).json({
        name: user.name,
        id: user._id,
        username: user.username
      });
    }
  });
});
module.exports = router;

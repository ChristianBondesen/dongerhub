// UserController.js
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const User = require('./user.js');
const config = require('./config.js');
const jwt = require('jsonwebtoken');

// CREATES A NEW USER
router.post('/', function(req, res) {
  User.create(
    {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    },
    function(err, user) {
      if (err) {
        return res
          .status(500)
          .send('There was a problem adding the information to the database.');
      }
      res.status(200).send(user);
    }
  );
});

// RETURNS ALL THE USERS IN THE DATABASE
router.get('/', function(req, res) {
  User.find({}, function(err, users) {
    if (err) {
      return res.status(500).send('There was a problem finding the users.');
    }
    res.status(200).send(users);
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
  .put('/:id', function(req, res) {
    User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (err, user) => {
        if (user === null) {
          return res.status(500).send('There was a problem updating the user.');
        } else {
          res.status(200).send(user);
        }
      }
    );
  })
  .delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.id, function(err, user) {
      if (err) {
        return res.status(500).send('There was a problem deleting the user.');
      }
      res.status(200).send('User ' + user.name + ' was deleted.');
    });
  });
// Find specific user
router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).send('There was a problem finding the user.');
    }
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
  });
});
module.exports = router;

// UserController.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('./user.js');

// CREATES A NEW USER
router.post('/', function(req, res) {
  User.create(
    {
      _id: req.body._id,
      name: req.body.name,
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
router.post('/securelogin', function(req, res) {
  User.find(
    {
      _id: req.body.name,
      password: req.body.password
    },
    function(err, user) {
      if (user.length > 0) {
        return res.status(200).send(user[0]);
      }
      res.status(404).send('Incorrect password or username');
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

// RETURNS THE SAVES OF GIVEN USER
router.get('/getsaves/:id', function(req, res) {
  User.findById(req.params.id, function(err, users) {
    if (err) {
      return res.status(500).send('There was a problem finding the users.');
    }
    res.status(200).send(users.saves);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).send('There was a problem finding the user.');
    }
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user);
  });
});

// GETS A SINGLE USER FROM THE DATABASE
router.get('/showuser/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).send('There was a problem finding the user.');
    }
    if (!user) return res.status(404).send('No user found.');
    res.status(200).send(user['saves'][0]);
  });
});

// DELETES A USER FROM THE DATABASE
router.delete('/:id', function(req, res) {
  User.findByIdAndRemove(req.params.id, function(err, user) {
    if (err) {
      return res.status(500).send('There was a problem deleting the user.');
    }
    res.status(200).send('User ' + user.name + ' was deleted.');
  });
});

// UPDATES A SINGLE USER IN THE DATABASE
router.put('/:id', function(req, res) {
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
});

module.exports = router;

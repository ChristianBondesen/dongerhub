'use strict';

const User = require('./DatabaseModels/user');

class Login {
  exists(name) {
    User.find({
      username: name
    }, (err, user) => {
      if (err) {
        console.log(err);
      }
      if (user.length >= 1) {
        return true;
      } else {
        return false;
      }

    });

  }


}

module.exports = Login;

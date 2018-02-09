'use strict';

const User = require('./DatabaseModels/user');
const hash = require('./PasswordHasher');
const config = require('./config.js');
const respones = require('./Responses')
const jwt = require('jsonwebtoken');

class UserControl {

  async exists(name) {
    const query = User.count({
      username: name
    });
    let donger = await query.exec();
    if (donger >= 1) {
      return true;
    } else {
      return false;
    }

  }
  async method(user) {
    const truth = await this.exists(user.username);
    if (truth) {
      return {
        result: 'error',
        returnToUser: {
          status: 'user already exists'
        }
      }
    } else {
      return await this.CreateUser(user);
    }

  }


  async CreateUser(user) {
    const Hasher = hash.saltHashPassword(user.password);
    const CreatedUser = await User.create({
      name: user.name,
      username: user.username,
      email: user.email,
      password: Hasher.passwordHash,
      salt: Hasher.salt,
    });
    if (createdUser.errors) {
      return createdUser.errors;
    }
    // creating a jwt payload
    const payload = {
      username: CreatedUser.username,
      admin: CreatedUser.admin
    };
    // signing jwt payload
    const token = jwt.sign(payload, config.secret, {
      expiresIn: '1h'
    });
    return respones.createdUser(a, token);
  }



}

module.exports = UserControl;

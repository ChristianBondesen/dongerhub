module.exports = {
  NoUser: {
    status: 'error',
    error: 'user already exists'
  },
  createdUser: (username, token) => {
    return {
      status: 'success',
      user: username,
      token: token
    };

  }

};

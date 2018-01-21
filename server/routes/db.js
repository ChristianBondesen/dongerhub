const config = require('./config.js');

const mongoose = require('mongoose');

mongoose.connect(config.database, {});

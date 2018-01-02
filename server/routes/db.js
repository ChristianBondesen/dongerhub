var url =
  'mongodb://simmetopia:donger@cluster0-shard-00-00-nyqu6.mongodb.net:27017,cluster0-shard-00-01-nyqu6.mongodb.net:27017,cluster0-shard-00-02-nyqu6.mongodb.net:27017/DAB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
var mongoose = require('mongoose');

mongoose.connect(url, {
  useMongoClient: true
  /* other options */
});

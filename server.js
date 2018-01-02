const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
var cors = require('cors');
const app = express();

// API file for interacting with MongoDB
const api = require('./server/routes/api');
app.use(cors());
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
  res.end;
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./router');
const { SERVER_PORT } = require('./constants');

// Initialize sequelize here
require('./db/sequelize');

const server = express();

// Express configuration
server.set('port', SERVER_PORT);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Content-Type', 'application/json');
    next();
});

server.use('/', router);

module.exports = {
    server,
};

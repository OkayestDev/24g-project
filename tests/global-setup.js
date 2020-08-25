// Loads server as a global so tests have access to it
module.exports = function () {
    const { server } = require('../src/server');
    const request = require('supertest');
    process.testServer = request(server);
};

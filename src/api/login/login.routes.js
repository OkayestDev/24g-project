const express = require('express');
const loginController = require('./login.controller');

const router = express.Router();

router.post('/', loginController.login);

module.exports = router;

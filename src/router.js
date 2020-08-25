const express = require('express');
const router = express.Router();

const loginRoutes = require('./api/login/login.routes');
const healthRoutes = require('./api/health/health.routes');

router.use('/health', healthRoutes);
router.use('/login', loginRoutes);

module.exports = {
    router,
};

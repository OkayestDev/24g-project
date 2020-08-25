const express = require('express');
const router = express.Router();

const healthRoutes = require('./api/health/health.routes');
const videoRoutes = require('./api/videos/video.routes');

router.use('/health', healthRoutes);
router.use('/videos', videoRoutes);

module.exports = {
    router,
};

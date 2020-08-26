const express = require('express');
const videoController = require('./video.controller');

const router = express.Router();

router.get('/', videoController.getVideos);

router.post('/:videoId/dislike', videoController.createVideoDislike);

router.post('/:videoId/like', videoController.createVideoLike);

router.put('/:videoId/view', videoController.incrementView);

router.post('/:videoId/comment', videoController.createVideoComment);

module.exports = router;

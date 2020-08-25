const express = require('express');
const videoController = require('./video.controller');

const router = express.Router();

router.get('/', videoController.getVideos);

router.post('/:id/dislike', videoController.createVideoDislike);

router.post('/:id/like', videoController.createVideoLike);

router.put('/:id/view', videoController.incrementView);

router.post('/:id/comment', videoController.createVideoComment);

module.exports = router;

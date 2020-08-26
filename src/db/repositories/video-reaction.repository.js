const { VideoReaction } = require('../models');
const { LIKE, DISLIKE } = require('../models/video-reaction.model');

const createVideoLike = async ({ videoId, userId }) =>
    VideoReaction.create({
        videoId,
        userId,
        reaction: LIKE,
    });

const createVideoDislike = async ({ videoId, userId }) =>
    VideoReaction.create({
        videoId,
        userId,
        reaction: DISLIKE,
    });

module.exports = {
    createVideoLike,
    createVideoDislike,
};

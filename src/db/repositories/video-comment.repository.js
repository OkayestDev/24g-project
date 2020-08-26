const { VideoComment } = require('../models');

const createVideoComment = async ({ videoId, userId, comment }) =>
    VideoComment.create({ videoId, userId, comment });

module.exports = {
    createVideoComment,
};

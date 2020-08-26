const { Video, VideoComment, VideoReaction, User } = require('../models');

const getVideos = async () =>
    Video.findAll({
        include: [
            {
                model: VideoComment,
                include: User,
            },
            {
                model: VideoReaction,
            },
        ],
    });

const incrementView = async (videoId) =>
    Video.increment({ views: 1 }, { where: { id: videoId } }).then(Boolean);

module.exports = {
    getVideos,
    incrementView,
};

const applyAssociations = (models) => {
    const { User, VideoComment, Video, VideoReaction } = models;

    Video.hasMany(VideoComment);
    Video.hasMany(VideoReaction);

    VideoComment.belongsTo(User);
    VideoComment.belongsTo(Video);

    VideoReaction.belongsTo(Video);
    VideoReaction.belongsTo(User);
};

module.exports = {
    applyAssociations,
};

const { videoCommentDTO } = require('../src/db/models/video-comment.model');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('video_comments', videoCommentDTO);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('video_comments');
    },
};

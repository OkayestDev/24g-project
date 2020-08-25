const { videoReactionDTO } = require('../src/db/models/video-reaction.model');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('video_reactions', videoReactionDTO);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('video_reactions');
    },
};

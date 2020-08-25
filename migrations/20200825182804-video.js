const { videoDTO } = require('../src/db/models/video.model');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('videos', videoDTO);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('videos');
    },
};

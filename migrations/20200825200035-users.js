const { userDTO } = require('../src/db/models/user.model');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users', userDTO);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users');
    },
};

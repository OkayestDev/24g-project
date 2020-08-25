'use strict';

const uuid = require('uuid');
const videoFixture = require('./fixtures/videos.json');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const inserts = videoFixture.map((video) => ({ ...video, id: uuid.v4() }));
        return queryInterface.bulkInsert('videos', inserts);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('videos', null, {});
    },
};

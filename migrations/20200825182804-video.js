module.exports = {
    up: async (queryInterface, Sequelize) => {
        const { STRING, UUID, INTEGER, DATE } = Sequelize.DataTypes;
        await queryInterface.createTable('videos', {
            id: {
                type: UUID,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: STRING,
                allowNull: false,
            },
            videoLink: {
                type: STRING,
                allowNull: false,
                field: 'video_link',
            },
            thumbLink: {
                type: STRING,
                allowNull: false,
                field: 'thumb_link',
            },
            likes: {
                type: INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
            dislikes: {
                type: INTEGER,
                defaultValue: 0,
                allowNull: false,
            },
            updatedAt: DATE,
            createdAt: DATE,
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('videos');
    },
};
